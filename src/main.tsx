import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://5f9e70b9baf344f68ab9976f4f504c49@o4504643141959680.ingest.sentry.io/4504643143467008",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 0.2,
  debug: true,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
