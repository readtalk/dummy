import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import "./App.css"; // atau index.css lu

export default function Welcome() {
  return (
    <div className="app-layout">
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 24px',
        textAlign: 'center'
      }}>
        
        <div style={{ marginBottom: '80px', marginTop: '80px', width: '96px', height: '96px' }}>
          <img src={logoLight} alt="READTalk" style={{ width: '100%', height: '100%' }} />
        </div>

        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: 400, 
          color: '#111b21', 
          marginBottom: '16px' 
        }}>
          Welcome to ReadTalk
        </h1>

        <p style={{ 
          fontSize: '14px', 
          color: '#667781', 
          lineHeight: '20px', 
          marginBottom: '32px',
          maxWidth: '300px'
        }}>
          Read our{" "}
          <span style={{ color: '#ff0000' }}>Privacy Policy</span>. Tap "Agree and
          continue" to accept our{" "}
          <span style={{ color: '#ff0000' }}>Terms of Service</span>.
        </p>

        <button style={{
          width: '100%',
          maxWidth: '300px',
          background: '#f0f0f0',
          border: 'none',
          borderRadius: '24px',
          padding: '14px',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          fontSize: '16px',
          color: '#111b21'
        }}>
          <span style={{ fontSize: '20px' }}>🌐</span>
          <span>English</span>
          <span style={{ fontSize: '12px' }}>▼</span>
        </button>

        <button
          onClick={() => window.location.href = "/resendlist"}
          style={{
            width: '100%',
            maxWidth: '300px',
            background: '#ff0000',
            border: 'none',
            borderRadius: '24px',
            padding: '16px',
            color: 'white',
            fontSize: '18px',
            fontWeight: 500,
            boxShadow: '0 2px 6px rgba(255,0,0,0.3)'
          }}
        >
          Agree and continue
        </button>

      </main>
    </div>
  );
}
