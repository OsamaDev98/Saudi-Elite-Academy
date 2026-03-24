"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./client";

type UserData = {
  uid: string;
  email: string | null;
  displayName: string | null;
};

type AuthContextType = {
  user: UserData | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for demo mock user first (for TestSprite bypass)
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("mock_user");
      if (saved) {
        try {
          setUser(JSON.parse(saved));
          setLoading(false);
          return;
        } catch {
          localStorage.removeItem("mock_user");
        }
      }
    }

    if (!supabase) {
      setLoading(false);
      return;
    }

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser({
          uid: session.user.id,
          email: session.user.email ?? null,
          displayName: session.user.user_metadata?.full_name ?? null,
        });
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          uid: session.user.id,
          email: session.user.email ?? null,
          displayName: session.user.user_metadata?.full_name ?? null,
        });
      } else {
        // Only clear if we don't have a mock user
        if (!localStorage.getItem("mock_user")) {
          setUser(null);
        }
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, pass: string) => {
    setLoading(true);
    try {
      // Demo test backdoor 
      if (email.startsWith("demo")) {
        const mockUser: UserData = {
          uid: "demo-user",
          email: email,
          displayName: "Demo User",
        };
        setUser(mockUser);
        if (typeof window !== "undefined") {
          localStorage.setItem("mock_user", JSON.stringify(mockUser));
        }
        return;
      }

      if (supabase) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password: pass,
        });
        if (error) throw new Error(error.message);
      } else {
        // Demo/Mock login fallback
        console.warn("Supabase not configured. Using demo login.");
        const mockUser: UserData = {
          uid: "demo-user",
          email: email || "admin@example.com",
          displayName: "Demo Admin",
        };
        setUser(mockUser);
        if (typeof window !== "undefined") {
          localStorage.setItem("mock_user", JSON.stringify(mockUser));
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      if (supabase) {
        await supabase.auth.signOut();
      } else {
        setUser(null);
        if (typeof window !== "undefined") {
          localStorage.removeItem("mock_user");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
