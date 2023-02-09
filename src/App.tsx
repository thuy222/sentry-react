import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import * as Sentry from "@sentry/react";

function App() {
  const [count, setCount] = useState(0);
  const error = console.error;
  console.log(error);

  const myFallback = <FallbackComponent />;

  return (
    <Sentry.ErrorBoundary fallback={myFallback} showDialog>
      <div className="App">
        <button
          onClick={() => {
            methodDoesNotExist();
            console.log("Method does not exist");
          }}
          style={{
            background: "#0C75AF",
            color: "white",
            fontSize: "2rem",
          }}
        >
          Sentry trigger error
        </button>
        <h1>Sentry + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </Sentry.ErrorBoundary>
  );
}

export default Sentry.withProfiler(App);

function FallbackComponent() {
  return <div>An error has occurred</div>;
}
