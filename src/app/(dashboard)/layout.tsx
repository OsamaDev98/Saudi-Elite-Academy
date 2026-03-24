"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/lib/supabase/context";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  CalendarDays,
  CreditCard,
  Settings,
  LogOut,
  Bell,
  Mail,
  Search,
  Menu,
  ChevronDown,
  FileCheck,
  X,
  CheckSquare,
  UserCheck,
  FileText
} from "lucide-react";

const ROLE_LINKS = {
  admin: [
    { name: "الرئيسية", href: "/admin", icon: LayoutDashboard },
    { name: "إدارة الطلاب", href: "/admin/students", icon: Users },
    { name: "تسجيل جديد", href: "/admin/new-students", icon: UserCheck },
    { name: "أحدث السجلات", href: "/admin/latest-records", icon: FileCheck },
    { name: "الفعاليات", href: "/admin/upcoming-events", icon: CalendarDays },
    { name: "هيئة التدريس", href: "/admin/teachers", icon: BookOpen },
    { name: "الجدول الدراسي", href: "/admin/schedule", icon: CalendarDays },
    { name: "الرسوم المالية", href: "/admin/finance", icon: CreditCard },
    { name: "إدارة المحتوى", href: "/admin/cms", icon: FileText },
    { name: "التنبيهات", href: "/admin/notifications", icon: Bell },
    { name: "الإعدادات", href: "/admin/settings", icon: Settings },
  ],
  student: [
    { name: "الرئيسية", href: "/student", icon: LayoutDashboard },
    { name: "سجل الدرجات", href: "/student/grades", icon: BookOpen },
    { name: "الجدول الدراسي", href: "/student/schedule", icon: CalendarDays },
    { name: "الواجبات", href: "/student/assignments", icon: FileCheck },
    { name: "التنبيهات", href: "/student/notifications", icon: Bell },
    { name: "الإعدادات", href: "/student/settings", icon: Settings },
  ],
  parent: [
    { name: "الرئيسية", href: "/parent", icon: LayoutDashboard },
    { name: "متابعة الأبناء", href: "/parent/children", icon: Users },
    { name: "الرسوم المالية", href: "/parent/finance", icon: CreditCard },
    { name: "التواصل", href: "/parent/messages", icon: Mail },
    { name: "التنبيهات", href: "/parent/notifications", icon: Bell },
    { name: "الإعدادات", href: "/parent/settings", icon: Settings },
  ],
  staff: [
    { name: "الرئيسية", href: "/staff", icon: LayoutDashboard },
    { name: "الفصول والطلاب", href: "/staff/classes", icon: Users },
    { name: "الجدول والمواعيد", href: "/staff/schedule", icon: CalendarDays },
    { name: "تحضير الطلاب", href: "/staff/student-preparation", icon: UserCheck },
    { name: "رصد الدرجات", href: "/staff/grading", icon: FileCheck },
    { name: "المهام", href: "/staff/missions", icon: CheckSquare },
    { name: "إدارة المحتوى", href: "/staff/cms", icon: FileText },
    { name: "التنبيهات", href: "/staff/notifications", icon: Bell },
    { name: "الإعدادات", href: "/staff/settings", icon: Settings },
  ]
};


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading } = useAuth();

  const currentRole = pathname?.split('/')[1] || 'admin';
  const activeLinks = ROLE_LINKS[currentRole as keyof typeof ROLE_LINKS] || ROLE_LINKS.admin;

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [hasNewNotifications, setHasNewNotifications] = useState(true);

  const userMenuRef = useRef<HTMLDivElement>(null);
  const notifMenuRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const filteredLinks = activeLinks.filter(link => link.name.includes(searchTerm));

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      router.push(`/${currentRole}/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
      if (notifMenuRef.current && !notifMenuRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSearchSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  let userName = "المستخدم";
  let userRole = "";
  let userInitials = "م";

  if (currentRole === 'admin') {
    userName = "د. محمد بن عبدالله";
    userRole = "مدير النظام";
    userInitials = "م ع";
  } else if (currentRole === 'staff') {
    userName = "أ. أحمد خالد";
    userRole = "موظف / عضو هيئة تدريس";
    userInitials = "أ خ";
  } else if (currentRole === 'student') {
    userName = "عمر عبدالرحمن";
    userRole = "طالب - الصف الثالث الثانوي";
    userInitials = "ع ع";
  } else if (currentRole === 'parent') {
    userName = "عبدالرحمن الشمري";
    userRole = "ولي أمر";
    userInitials = "ع ش";
  }

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  // If not authenticated, the useEffect will redirect and we can return null early to prevent flash
  if (!user) {
    return null;
  }

  return (
    <div className="flex h-screen bg-background-light dark:bg-background-dark overflow-hidden font-sans text-slate-900 dark:text-slate-100" dir="rtl">
      
      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity cursor-pointer" 
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed md:relative inset-y-0 right-0 w-72 glass border-l border-white/20 dark:border-white/5 flex flex-col shadow-premium z-50 md:z-20 transform transition-transform duration-300 ${isMobileSidebarOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
        <div className="p-6 border-b border-slate-100 dark:border-white/5 h-20 flex items-center justify-between">
          <Link href={`/${currentRole}`} onClick={() => setIsMobileSidebarOpen(false)} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary text-background-dark rounded-xl flex items-center justify-center shadow-md transform rotate-3">
              <span className="text-xl font-black -rotate-3">ن</span>
            </div>
            <span className="font-black text-xl tracking-tight text-slate-900 dark:text-slate-100">النخبة السعودية</span>
          </Link>
          <button onClick={() => setIsMobileSidebarOpen(false)} className="md:hidden text-slate-500 hover:text-slate-900 dark:hover:text-slate-100">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4">
          <p className="px-4 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">القائمة الرئيسية</p>
          <nav className="space-y-1">
            {activeLinks.map((link) => {
              const isRoot = link.href === `/${currentRole}`;
              const isActive = isRoot
                ? pathname === link.href
                : pathname === link.href || pathname?.startsWith(`${link.href}/`);
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold ${isActive
                      ? "bg-primary/10 dark:bg-primary/20 text-primary"
                      : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-100"
                    }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-primary fill-primary/20" : ""}`} />
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-100 dark:border-white/5">
          <button onClick={() => router.push('/login')} className="flex items-center gap-3 px-4 py-3 rounded-xl w-full text-destructive hover:bg-destructive/10 transition-colors font-semibold">
            <LogOut className="w-5 h-5" />
            تسجيل الخروج
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden bg-slate-50/50 dark:bg-black/20">
        {/* Top Header */}
        <header className="h-20 glass border-b border-white/20 dark:border-white/5 flex items-center justify-between px-6 lg:px-10 z-10 shadow-sm relative">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMobileSidebarOpen(true)} className="md:hidden text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative hidden md:block" ref={searchContainerRef}>
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowSearchSuggestions(true);
                }}
                onFocus={() => { if (searchTerm) setShowSearchSuggestions(true); }}
                onKeyDown={handleSearch}
                placeholder="ابحث في الأقسام..."
                className="bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl pr-10 pl-4 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary w-64 transition-all"
              />
              {showSearchSuggestions && searchTerm.trim() && (
                <div className="absolute top-12 right-0 w-full bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden z-50 py-2">
                  {filteredLinks.length > 0 ? (
                    filteredLinks.map(link => (
                      <Link 
                        key={link.href} 
                        href={link.href}
                        onClick={() => { setShowSearchSuggestions(false); setSearchTerm(''); }}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-300 transition-colors"
                      >
                        <link.icon className="w-4 h-4 text-primary" />
                        <span className="font-bold text-sm">{link.name}</span>
                      </Link>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-slate-500 text-sm font-semibold flex flex-col items-center justify-center text-center">
                      <Search className="w-5 h-5 mb-2 opacity-50" />
                      لا يوجد قسم مطابق لبحثك. اضغط Enter للبحث الشامل.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative" ref={notifMenuRef}>
              <button
                onClick={() => { 
                  setShowNotifications(!showNotifications); 
                  setShowUserMenu(false); 
                  if (!showNotifications) setHasNewNotifications(false);
                }}
                className="relative text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors p-2"
              >
                <Bell className="w-6 h-6" />
                <span className={`absolute top-1 right-2 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-background-dark transition-colors ${hasNewNotifications ? 'bg-destructive' : 'bg-white dark:bg-slate-400'}`}></span>
              </button>

              {showNotifications && (
                <div className="absolute left-0 mt-4 w-80 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden z-50">
                  <div className="p-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
                    <h3 className="font-bold text-slate-900 dark:text-white">الإشعارات</h3>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {[1, 2, 3].map((_, i) => (
                      <div key={i} className="p-4 border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer">
                        <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">تحديث جديد في النظام</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">تم إضافة ميزات جديدة، الرجاء الاطلاع عليها.</p>
                        <p className="text-[10px] text-slate-400 mt-2">منذ ساعتين</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 text-center border-t border-slate-100 dark:border-slate-700">
                    <Link href={`/${currentRole}/notifications`} onClick={() => setShowNotifications(false)} className="text-xs font-bold text-primary hover:underline">عرض كل الإشعارات</Link>
                  </div>
                </div>
              )}
            </div>

            <div className="h-8 w-px bg-slate-200 dark:bg-white/10"></div>

            <div className="relative" ref={userMenuRef}>
              <div
                className="flex items-center gap-3 cursor-pointer group p-1 pr-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                onClick={() => { setShowUserMenu(!showUserMenu); setShowNotifications(false); }}
              >
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{userName}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{userRole}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border-2 border-transparent group-hover:border-primary transition-colors">
                  {userInitials}
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
              </div>

              {showUserMenu && (
                <div className="absolute left-0 mt-4 w-64 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden z-50 p-2">
                  <div className="p-3 border-b border-slate-100 dark:border-slate-700 mb-2">
                    <p className="font-bold text-slate-900 dark:text-white truncate">{userName}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{userRole}</p>
                  </div>

                  <div className="space-y-1 mb-2">
                    {activeLinks.slice(0, 3).map((link) => {
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setShowUserMenu(false)}
                          className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary rounded-xl transition-colors"
                        >
                          <Icon className="w-4 h-4" />
                          {link.name}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="border-t border-slate-100 dark:border-slate-700 pt-2">
                    <button
                      onClick={() => {
                        setShowUserMenu(false);
                        router.push('/login');
                      }}
                      className="flex items-center w-full gap-3 px-3 py-2 text-sm text-destructive hover:bg-destructive/10 rounded-xl transition-colors font-bold"
                    >
                      <LogOut className="w-4 h-4" />
                      تسجيل الخروج
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
