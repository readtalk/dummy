import logoLight from "./logo-light.svg";
import logoDark from "./logo-dark.svg";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
      <div className="flex flex-col items-center w-full max-w-md">
        
        <div className="mb-20 mt-20 w-24 h-24">
          <img src={logoLight} alt="READTalk" className="block w-full h-full dark:hidden" />
          <img src={logoDark} alt="READTalk" className="hidden w-full h-full dark:block" />
        </div>

        <h1 className="text-3xl text-black font-normal mb-4">
          Welcome to ReadTalk
        </h1>

        <p className="text-center text-gray-600 text-sm leading-5 mb-8 px-4">
          Read our{" "}
          <span className="text-red-500">Privacy Policy</span>. Tap "Agree and
          continue" to accept our{" "}
          <span className="text-red-500">Terms of Service</span>.
        </p>

        <button className="w-full bg-gray-100 rounded-full py-3.5 mb-4 flex items-center justify-center gap-2">
          <span className="text-xl">🌐</span>
          <span className="text-black text-base">English</span>
          <span className="text-black text-xs">▼</span>
        </button>

        <button
          onClick={() => window.location.href = "/resendlist"}
          className="w-full bg-red-500 text-white text-lg font-medium py-4 rounded-full shadow-lg shadow-red-500/30 active:bg-red-600"
        >
          Agree and continue
        </button>
        
      </div>
    </div>
  );
}
