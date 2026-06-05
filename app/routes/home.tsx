import { useState } from "react";
import BottomNav from "~/components/BottomNav";
import ResendList from "~/components/ResendList";
import Updates from "~/components/Updates";
import Communities from "~/components/Communities";
import Calls from "~/components/Calls";

export default function Home() {
  const [activeTab, setActiveTab] = useState<'chats'|'updates'|'communities'|'calls'>('chats');
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`app-layout ${isDark ? 'dark' : ''}`}>
      <header className="app-header">
        <h1 className="app-header-title">READTalk</h1>
        <div className="app-header-right">
          <span className="app-user-info">Online</span>
          <button className="app-menu-btn" onClick={() => setIsDark(!isDark)}>
            <img src="/icons/menu-dots-vertical.svg" />
          </button>
        </div>
      </header>
      
      <div className="app-search-container">
        <div className="app-search-box">
          <img src="/icons/search.svg" className="app-search-icon" />
          <input className="app-search-input" placeholder="Search" />
        </div>
      </div>

      <main className="app-main">
        <div className="app-sidebar">
          {activeTab === 'chats' && <ResendList />}
          {activeTab === 'updates' && <Updates />}
          {activeTab === 'communities' && <Communities />}
          {activeTab === 'calls' && <Calls />}
        </div>
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <button className="app-fab">
        <img src="/icons/plus-small.svg" />
      </button>
    </div>
  )
}
