import { useState, useEffect } from "react";
import MenuDotsVertical from "./assets/menu-dots-vertical.svg";
import SearchIcon from "./assets/search.svg";
import EnvelopeIcon from "./assets/envelope.svg";
import UserAddIcon from "./assets/plus-small.svg";
import BubbleDiscussionIcon from "./assets/bubble-discussion.svg";
import CameraIcon from "./assets/at.svg";
import UsersIcon from "./assets/users.svg";
import PhoneCallIcon from "./assets/phone-call.svg";
import "./welcome.tsx";

export default function ResendList() {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("chat");
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUserId(params.get("userId") || "");
    setEmail(params.get("email") || "");
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('readtalk_theme') as 'light' | 'dark' | null;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', theme === 'dark'? '                      
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light'? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('readtalk_theme', newTheme);
  };

  const handleLogout = () => {
    window.parent.postMessage({ type: "LOGOUT" }, "https:                       
    setShowMenu(false);
  };

  return (
    <div className={`app-layout ${theme}`}>
      <header className="app-header">
        <div className="app-header-left">
          <h1 className="app-header-title">READTalk</h1>
        </div>
        <div className="app-header-right">
          {userId && email && (
            <span className="app-user-info">
              {userId.slice(0, 8)}... | {email.split("@")[0]}
            </span>
          )}
          <button className="app-menu-btn" onClick={() => setShowMenu(!showMenu)}>
            <img src={MenuDotsVertical} alt="Menu" />
          </button>
          {showMenu && (
            <div className="app-dropdown">
              <button className="app-mode-toggle" onClick={toggleTheme}>
                {theme === '" onClick={toggleTheme}>
                {theme === 'light'? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              </button>
              <button className=""app-dropdown-item app-logout-item" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </header>
      <!-- sisa kode sama persis -->
    </div>
  );
  }
                        
