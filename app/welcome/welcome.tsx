import logo from "./logo.svg";

export function Welcome() {
  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-[360px] md:max-w-[600px] flex flex-col items-center text-center">

          {/* LOGO FLIP 360° 3s */}
          <div
            className="w- h- mb- animate-[flip_3s_linear_infinite]"
            style={{ perspective: '1000px' }}
          >
            <img src={logo} alt="READTalk" className="w-full h-full" />
          </div>

          {/* H1 */}
          <h1 className="text- md:text- leading- font-normal text-[#111b21] mb-[6px]">
            Welcome to READTalk
          </h1>

          {/* P: 1 BARIS DI DESKTOP, WRAP DI HP */}
          <p className="text- md:text- leading- text-[#667781] mb- md:whitespace-nowrap">
            Read our <a href="#" className="text-[#0066cc]">Privacy Policies</a>. Tap "Agree and continue" to accept our <a href="#" className="text-[#0066cc]">Terms of Service</a>.
          </p>

          {/* BUTTON ENGLISH */}
          <button className="bg-[#f0f0f0] rounded-full px- py-[6px] mb- flex items-center gap-[6px] text-[#111b21] text-">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0088ff" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <span>English</span>
            <span className="text-">▼</span>
          </button>

          {/* BUTTON MERAH - FULL DI HP, MAX 360 DI DESKTOP */}
          <button
            onClick={() => window.location.href = "/resendlist"}
            className="w-full max-w-[360px] bg-[#ff0000] py- text-white text- font-medium"
          >
            Agree and continue
          </button>

        </div>
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
