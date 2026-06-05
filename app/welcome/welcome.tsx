import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import "./App.css";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">

        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img src={logoLight} alt="READTalk" className="block w-full dark:hidden" />
            <img src={logoDark} alt="READTalk" className="hidden w-full dark:block" />
          </div>
        </header>

        <div className="max-w-[300px] w-full space-y-6 px-4">
          <h1>Welcome to ReadTalk</h1>

          <p>
            Read our <a href="#">Privacy Policy</a>. Tap "Agree and
            continue" to accept our <a href="#">Terms of Service</a>.
          </p>

          <button>🌐 English ▼</button>

          <button onClick={() => window.location.href = "/resendlist"}>
            Agree and continue
          </button>
        </div>

      </div>
    </main>
  );
}
