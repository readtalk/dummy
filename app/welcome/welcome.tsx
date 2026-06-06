import logo from "./logo.svg";

export function Welcome() {
  return (
    <main
      className="h-[100dvh] bg-white flex flex-col items-center justify-center px-4"
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: '#111b21'
      }}
    >
      <div className="w-full max-w-[360px] md:max-w-[600px] flex flex-col items-center text-center">

        {/* LOGO 80px kayak.app-empty-icon + FLIP */}
        <div
          className="w- h- mb- animate-[flip_3s_linear_infinite]"
          style={{ perspective: '1000px' }}
        >
          <img src={logo} alt="READTalk" className="w-full h-full" />
        </div>

        {/* H1 pake style.app-header-title: 27px 600 */}
        <h1 className="text- font-semibold text-[#111b21] mb-[6px] tracking-[-0.5px]">
          Welcome to READTalk
        </h1>

        {/* P: 15px kayak.app-search-input +.app-empty-text */}
        <p className="text- leading- text-[#667781] mb- md:whitespace-nowrap">
          Read our <a href="#" className="text-[#ff0000] font-medium">Privacy Policies</a>. Tap "Agree and continue" to accept our <a href="#" className="text-[#ff0000] font-medium">Terms of Service</a>.
        </p>

        {/* BUTTON ENGLISH: pake style search-box */}
        <button className="bg-[#f0f0f0] rounded-[24px] px-[24px] py-[12px] mb- flex items-center gap-[8px] text-[#111b21] text-">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 0 0 1-4 10 15.3 0 0 1-4-10 15.3 0 0 1 4-10z"/>
          </svg>
          <span>English</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" opacity="0.5">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </button>

        {/* BUTTON MERAH: pake style.app-fab */}
        <button
          onClick={() => window.location.href = "/resendlist"}
          className="w-full max-w-[360px] bg-[#ff0000] py- text-white text- font-medium rounded-[16px]"
          style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.3)' }}
        >
          Agree and continue
        </button>

      </div>

      <style jsx>{`
        @keyframes flip {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
      `}</style>
    </main>
  );
}
