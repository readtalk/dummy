import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import "./App.css";

export default function Welcome() {
  return (
    <div className="welcome-layout">
      <div className="welcome-logo">
        <img src={logoLight} alt="READTalk" className="block dark:hidden" />
        <img src={logoDark} alt="READTalk" className="hidden dark:block" />
      </div>

      <h1 className="welcome-title">Welcome to ReadTalk</h1>

      <p className="welcome-text">
        Read our <span className="link">Privacy Policy</span>. Tap "Agree and
        continue" to accept our <span className="link">Terms of Service</span>.
      </p>

      <button className="welcome-lang-btn">
        <span style={{ fontSize: '20px' }}>🌐</span>
        <span>English</span>
        <span style={{ fontSize: '12px' }}>▼</span>
      </button>

      <button
        onClick={() => window.location.href = "/resendlist"}
        className="welcome-agree-btn"
      >
        Agree and continue
      </button>
    </div>
  );
}
