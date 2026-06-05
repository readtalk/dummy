import logo from "./logo.svg";

export function Welcome() {
  return (
    <main className="min-h-screen bg-[#f6f6f6] relative">
      {/* Icon 3 titik */}
      <button className="absolute top-5 right-5">
        <svg width="4" height="18" viewBox="0 0 4 18" fill="#0c1317">
          <circle cx="2" cy="3" r="1.5"/>
          <circle cx="2" cy="9" r="1.5"/>
          <circle cx="2" cy="15" r="1.5"/>
        </svg>
      </button>

      {/* Icon accessibility */}
      <button className="absolute top-[72px] right-5 w-10 h-10 border border-[#dadce0] rounded-full bg-white flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00a884" strokeWidth="2.2" strokeLinecap="round">
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 15v-4M12 9h.01"/>
        </svg>
      </button>

      <div className="min-h-screen flex flex-col items-center justify-center px-8">
        <div className="w-full max-w-[328px] flex flex-col items-center text-center">

          <div className="w-[152px] h-[152px] mb-[72px]">
            <img src={logo} alt="READTalk" className="w-full h-full" />
          </div>

          <h1 className="text-[28px] leading-[34px] font-normal text-[#0c1317] mb-[12px]">
            Welcome to READTalk
          </h1>

          <p className="text-[15px] leading-[22px] text-[#5f6368] mb-[32px]">
            Read our <a href="#" className="text-[#1a73e8] font-medium">Privacy Policies</a>. Tap "Agree and continue" to accept our <a href="#" className="text-[#1a73e8] font-medium">Terms of Service</a>.
          </p>

          <button className="bg-[#f1f3f4] rounded-full px-[20px] py-[10px] mb-[24px] flex items-center gap-[8px] text-[#202124] text-[15px]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <span>English</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </button>

          <button
            onClick={() => window.location.href = "/resendlist"}
            className="w-full bg-[#ff0000] py-[14px] text-white text-[16px] font-medium tracking-[0.3px] active:bg-[#e60000]"
          >
            Agree and continue
          </button>

        </div>
      </div>
    </main>
  );
}
