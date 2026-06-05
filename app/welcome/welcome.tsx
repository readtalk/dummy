import logo from "./logo.svg";

export function Welcome() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] relative">
      {/* Icon 3 titik kanan atas */}
      <button className="absolute top-4 right-4 p-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#111b21">
          <circle cx="12" cy="5" r="1.5"/>
          <circle cx="12" cy="12" r="1.5"/>
          <circle cx="12" cy="19" r="1.5"/>
        </svg>
      </button>

      {/* Icon accessibility */}
      <button className="absolute top-16 right-4 p-2 border border-gray-300 rounded-full bg-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a884" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4M12 8h.01M8 12h8"/>
        </svg>
      </button>

      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-[320px] flex flex-col items-center text-center">

          <div className="w-36 h-36 mb-16">
            <img src={logo} alt="READTalk" className="w-full h-full" />
          </div>

          <h1 className="text-[28px] font-normal text-[#111b21] mb-3">
            Welcome to READTalk
          </h1>

          <p className="text-[15px] text-[#54656f] leading-[22px] mb-8">
            Read our <a href="#" className="text-[#0057d9] font-medium">Privacy Policies</a>. Tap "Agree and continue" to accept our <a href="#" className="text-[#0057d9] font-medium">Terms of Service</a>.
          </p>

          <button className="bg-[#efefef] rounded-full px-6 py-3 mb-6 flex items-center gap-2 text-[#111b21] text-[15px]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 0 0 1 4-10z"/>
            </svg>
            <span>English</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </button>

          <button
            onClick={() => window.location.href = "./resendlist"}
            className="w-full bg-[#ff0000] py-4 text-white text-[17px] font-medium active:bg-[#e60000]"
          >
            Agree and continue
          </button>

        </div>
      </div>
    </main>
  );
}
