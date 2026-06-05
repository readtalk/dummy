type Tab = 'chats' | 'updates' | 'communities' | 'calls';

interface Props {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export default function BottomNav({ activeTab, setActiveTab }: Props) {
  const tabs = [
    { id: 'chats', label: 'Chats', icon: '/icons/bubble-discussion.svg' },
    { id: 'updates', label: 'Updates', icon: '/icons/at.svg' },
    { id: 'communities', label: 'Communities', icon: '/icons/users.svg' },
    { id: 'calls', label: 'Calls', icon: '/icons/phone-call.svg' },
  ] as const;

  return (
    <nav className="app-bottom-nav">
      {tabs.map(tab => (
        <button 
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`app-bottom-tab ${activeTab === tab.id ? 'active' : ''}`}
        >
          <img src={tab.icon} className="app-bottom-icon" />
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  )
}
