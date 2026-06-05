import logo from "./logo.svg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4 min-h-screen">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">

        <header className="flex flex-col items-center gap-9">
          <div className="w-24 h-24">
            <img src={logo} alt="READTalk" className="block w-full h-full" />
          </div>
        </header>

        <div className="max-w-[300px] w-full space-y-6 px-4 text-center">
          <h1 className="text-2xl font-normal text-gray-900 dark:text-gray-100">
            Welcome to ReadTalk
          </h1>

          <p className="text-sm text-gray-600 dark:text-gray-400 leading-5">
            Read our <a href="#" className="text-red-600">Privacy Policy</a>. Tap "Agree and
            continue" to accept our <a href="#" className="text-red-600">Terms of Service</a>.
          </p>

          <button className="w-full bg-gray-100 dark:bg-gray-800 rounded-3xl p-3.5 flex items-center justify-center gap-2 text-gray-900 dark:text-gray-100">
            <span className="text-xl">🌐</span>
            <span>English</span>
            <span className="text-xs">▼</span>
          </button>

          <button
            onClick={() => window.location.href = "/resendlist"}
            className="w-full bg-red-600 rounded-3xl p-4 text-white text-lg font-medium shadow-md shadow-red-600/30 active:bg-red-700"
          >
            Agree and continue
          </button>
        </div>

      </div>
    </main>
  );
}
