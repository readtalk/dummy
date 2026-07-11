import logo from "./logo.svg";

export function Welcome() {
  return (
    <main className="h-[100dvh] bg-[#f7f8fa] flex flex-col items-center justify-center px-5 font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif]">
      <div className="w-full max-w-[330px] flex flex-col items-center text-center">

        {/* LOGO 140px - SESUAI SCREENSHOT */}
        <div
          className="w-[140px] h-[140px] mb-8 animate-[flip_3s_linear_infinite]"
          style={{ perspective: '1000px' }}
        >
          <img src={logo} alt="READTalk" className="w-full h-full" />
        </div>

        {/* H1: 16px font-medium - BUKAN 27px */}
        <h1 className="text-base font-medium text-[#111b21] mb-2">
          Welcome to READTalk
        </h1>

        {/* P: 14px #667781, WRAP DI HP - LINK MERAH */}
        <p className="text-sm leading-[20px] text-[#667781] mb-6">
          Read our <a href="#" className="text-[#ff0000] font-medium">Privacy Policies</a>. Tap "Agree and continue" to accept our <a href="#" className="text-[#ff0000] font-medium">Terms of Service</a>.
        </p>

        {/* BUTTON ENGLISH: 36px tinggi, bg #f0f0f0 */}
        <button className="h-9 bg-[#f0f0f0] rounded-full px-5 mb-4 flex items-center gap-2 text-[15px] text-[#111b21]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-60">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20M12 2a15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          <span>English</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-60">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </button>

        {/* BUTTON MERAH: 48px tinggi, radius 24px */}
        <button
          onClick={() => window.location.href = "./resendlist"}
          className="w-full h-12 bg-[#ff0000] text-white text-[15px] font-medium rounded-3xl active:bg-[#e60000]"
          style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}
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
