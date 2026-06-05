import { Link } from "react-router";

export default function ResendList() {
  const chats = [
    { id: 'cimotmot', name: 'Cimotmot', msg: 'oke bang', time: '10:57' },
    { id: 'grup', name: 'Grup Dummy', msg: 'test', time: '09:30' },
  ];

  if (chats.length === 0) {
    return (
      <div className="app-empty">
        <img src="/icons/bubble-discussion.svg" className="app-empty-icon" />
        <p className="app-empty-text">Belum ada chat</p>
      </div>
    )
  }

  return (
    <div>
      {chats.map(chat => (
        <Link key={chat.id} to={`/chat/${chat.id}`} style={{display: 'block', padding: '12px 16px', borderBottom: '1px solid #e0e0e0'}}>
          <div style={{fontWeight: 500}}>{chat.name}</div>
          <div style={{fontSize: '14px', color: '#667781'}}>{chat.msg}</div>
        </Link>
      ))}
    </div>
  )
}
