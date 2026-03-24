import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#35ac76ff',
          borderRadius: '8px',
          color: '#ffffff',
          fontSize: 22,
          fontWeight: 'bold',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}
      >
        <span style={{ transform: 'rotate(-10deg)' }}>ن</span>
      </div>
    ),
    { ...size }
  )
}
