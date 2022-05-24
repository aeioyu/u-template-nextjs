import { configs } from "@/configs/configs";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { CaptureContext } from "@sentry/types";

export function initSentry() {
  if (!configs.sentry.dsn) {
    return;
  }

  Sentry.init({
    dsn: configs.sentry.dsn,
    integrations: [new BrowserTracing()],
    environment: configs.env,
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 0.2,
  });
}

export function sentryError(error: Error, context?: CaptureContext) {
  Sentry.captureException(error, context);
}
