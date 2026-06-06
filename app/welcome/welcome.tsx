import logo from "./logo.svg";

export function Welcome() {
  return (
    <main className="min-h-screen bg-[#f6f6f6] relative">
      {/* Icon 3 titik */}
      <button className="absolute top- right-">
        <svg width="4" height="18" viewBox="0 0 4 18" fill="#0c1317">
          <circle cx="2" cy="3" r="1.5"/>
          <circle cx="2" cy="9" r="1.5"/>
          <circle cx="2" cy="15" r="1.5"/>
        </svg>
      </button>

      {/* Icon accessibility */}
      <button className="absolute top- right- w- h- border border-[#dadce0] rounded-full bg-white flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00a884" strokeWidth="2.2" strokeLinecap="round">
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 15v-4M12 9h.01"/>
        </svg>
      </button>

      <div className="min-h-screen flex flex-col items-center justify-center px-">
        <div className="w-full max-w-[328px] flex flex-col items-center text-center">

          {/* LOGO MUTER 360° 3s */}
          <div className="w-[152px] h-[152px] mb- animate-[spin_3s_linear_infinite]">
            <img src={logo} alt="READTalk" className="w-full h-full" />
          </div>

          <h1 className="text- leading- font-normal text-[#0c1317] mb-">
            Welcome to READTalk
          </h1>

          {/* TULISAN 1 BARIS - NO WRAP */}
          <p className="text- leading- text-[#5f6368] mb- whitespace-nowrap">
            Read our <a href="#" className="text-[#1a73e8] font-medium">Privacy Policies</a>. Tap "Agree and continue" to accept our <a href="#" className="text-[#1a73e8] font-medium">Terms of Service</a>.
          </p>

          {/* BUTTON LEBAR PAS KONTEN - GA FULL */}
          <button className="bg-[#f1f3f4] rounded-full px- py- mb- flex items-center gap-[8px] text-[#202124] text-">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <span>English</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </button>

          {/* BUTTON MERAH FULL WIDTH TAPI ADA PADDING LUAR */}
          <button
            onClick={() => window.location.href = "/resendlist"}
            className="w-full bg-[#ff0000] py- text-white text- font-medium tracking-[0.3px] active:bg-[#e60000]"
          >
            Agree and continue
          </button>

        </div>
      </div>
    </main>
  );
}
