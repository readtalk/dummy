import { Link } from "react-router";

export default function Settings() {
  return (
    <div className="app-layout">
      <header className="app-header">
        <Link to="/chats" className="app-menu-btn">
          <img src="/icons/arrow-small-left.svg" />
        </Link>
        <h1 className="app-header-title" style={{fontSize: '18px'}}>Settings</h1>
      </header>
      <main className="app-sidebar">
        <div style={{padding: '12px 16px', borderBottom: '1px solid #e0e0e0'}}>Account</div>
        <div style={{padding: '12px 16px', borderBottom: '1px solid #e0e0e0'}}>Privacy</div>
        <div style={{padding: '12px 16px', borderBottom: '1px solid #e0e0e0'}}>Chats</div>
        <div style={{padding: '12px 16px', borderBottom: '1px solid #e0e0e0'}}>Notifications</div>
      </main>
    </div>
  )
}
