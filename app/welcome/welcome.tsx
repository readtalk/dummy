import logo from "./logo.svg";

export function Welcome() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-[#111b21] px-6">
      <div className="w-full max-w-[300px] flex flex-col items-center text-center">

        <div className="w-24 h-24 mb-20 mt-20">
          <img src={logo} alt="READTalk" className="w-full h-full" />
        </div>

        <h1 className="text-[28px] font-normal text-[#111b21] dark:text-[#e9edef] mb-4">
          Welcome to ReadTalk
        </h1>

        <p className="text-[14px] text-[#667781] dark:text-[#8696a0] leading-5 mb-8">
          Read our <a href="#" className="text-[#ff0000]">Privacy Policy</a>. Tap "Agree and
          continue" to accept our <a href="#" className="text-[#ff0000]">Terms of Service</a>.
        </p>

        <button className="w-full bg-[#f0f0f0] dark:bg-[#2a3942] rounded-full py-3.5 mb-4 flex items-center justify-center gap-2 text-[#111b21] dark:text-[#e9edef] text-base">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-[#0096ff]">
            <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 0 0 1 4-10z" strokeWidth="1.5"/>
          </svg>
          <span>English</span>
          <span className="text-xs">▼</span>
        </button>

        <button
          onClick={() => window.location.href = "/resendlist"}
          className="w-full bg-[#ff0000] rounded-full py-4 text-white text-lg font-medium shadow-[0_2px_6px_rgba(255,0,0,0.3)] active:bg-[#e60000]"
        >
          Agree and continue
        </button>

      </div>
    </main>
  );
}
