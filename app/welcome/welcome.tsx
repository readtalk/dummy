import logo from "./logo.svg";

export function Welcome() {
  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-[300px] flex flex-col items-center text-center">

          {/* LOGO 100px + FLIP 360° 3s */}
          <div
            className="w-[100px] h-[100px] mb-[36px] animate-[flip_3s_linear_infinite]"
            style={{ perspective: '1000px' }}
          >
            <img src={logo} alt="READTalk" className="w-full h-full" />
          </div>

          {/* H1 18px */}
          <h1 className="text- leading- font-normal text-[#111b21] mb-[8px]">
            Welcome to READTalk
          </h1>

          {/* P 13px 1 BARIS - WHITESPACE-NOWRAP */}
          <p className="text- leading- text-[#667781] mb- whitespace-nowrap">
            Read our <a href="#" className="text-[#0056b3]">Privacy Policies</a>. Tap "Agree and continue" to accept our <a href="#" className="text-[#0056b3]">Terms of Service</a>.
          </p>

          {/* BUTTON ENGLISH W-AUTO BUKAN W-FULL */}
          <button className="bg-[#f0f0f0] rounded-full px-[20px] py-[7px] mb- flex items-center gap-[6px] text-[#111b21] text-">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0096ff" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 0 0 1 4-10z"/>
            </svg>
            <span>English</span>
            <span className="text-">▼</span>
          </button>

          {/* BUTTON MERAH FULL 300px */}
          <button
            onClick={() => window.location.href = "/resendlist"}
            className="w-full bg-[#ff0000] py-[10px] text-white text- font-medium"
          >
            Agree and continue
          </button>

        </div>
      </div>

      {/* KEYFRAMES FLIP */}
      <style jsx>{`
        @keyframes flip {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
      `}</style>
    </main>
  );
}
