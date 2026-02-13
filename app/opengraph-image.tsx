import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Confitone — Reclaim Your Sleeveless Confidence'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #E8F5EE 0%, #5BB98C 50%, #3DA870 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 28,
              color: 'rgba(255,255,255,0.8)',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: 20,
              fontWeight: 500,
            }}
          >
            CONFITONE
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: 'white',
              lineHeight: 1.1,
              marginBottom: 24,
              maxWidth: 900,
            }}
          >
            Reclaim Your Sleeveless Confidence
          </div>
          <div
            style={{
              fontSize: 24,
              color: 'rgba(255,255,255,0.85)',
              maxWidth: 700,
              lineHeight: 1.4,
              marginBottom: 32,
            }}
          >
            Comfortable, non-invasive arm toning sleeves for women 40+. Trusted by 23,000+ women.
          </div>
          <div
            style={{
              display: 'flex',
              gap: 40,
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
              <span style={{ fontSize: 36, fontWeight: 700 }}>23,000+</span>
              <span style={{ fontSize: 14, opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Happy Customers</span>
            </div>
            <div style={{ width: 1, height: 50, background: 'rgba(255,255,255,0.3)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
              <span style={{ fontSize: 36, fontWeight: 700 }}>4.9/5</span>
              <span style={{ fontSize: 14, opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Star Rating</span>
            </div>
            <div style={{ width: 1, height: 50, background: 'rgba(255,255,255,0.3)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
              <span style={{ fontSize: 36, fontWeight: 700 }}>30 Day</span>
              <span style={{ fontSize: 14, opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
