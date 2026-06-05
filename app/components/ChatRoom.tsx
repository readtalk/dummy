import { Link } from "react-router";

export default function ChatRoom({ chatId }: { chatId?: string }) {
  return (
    <div className="app-layout" style={{height: '100dvh'}}>
      <header className="app-header">
        <Link to="/chats" className="app-menu-btn">
          <img src="/icons/arrow-small-left.svg" />
        </Link>
        <h1 className="app-header-title" style={{fontSize: '18px'}}>{chatId || 'Cimotmot'}</h1>
        <button className="app-menu-btn">
          <img src="/icons/phone-call.svg" />
        </button>
      </header>
      
      <main style={{flex: 1, padding: '16px', background: '#efeae2', overflowY: 'auto'}}>
        <div style={{background: 'white', padding: '8px 12px', borderRadius: '8px', width: 'fit-content', marginBottom: '8px'}}>Halo bang</div>
        <div style={{background: '#d9fdd3', padding: '8px 12px', borderRadius: '8px', width: 'fit-content', marginLeft: 'auto'}}>oke bang</div>
      </main>

      <div className="app-search-container" style={{borderTop: '1px solid #e0e0e0'}}>
        <div className="app-search-box">
          <input className="app-search-input" placeholder="Ketik pesan" style={{paddingLeft: '16px'}} />
          <button className="app-menu-btn" style={{position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)'}}>
            <img src="/icons/paper-plane.svg" />
          </button>
        </div>
      </div>
    </div>
  )
}
