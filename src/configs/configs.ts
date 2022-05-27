interface Configs {
  env: "development" | "production";
  isDebug: boolean;
  sentry: {
    dsn: string;
  };
}

export const configs = {
  env: process.env.NEXT_PUBLIC_ENV || "development",
  isDebug: process.env.NEXT_PUBLIC_DEBUG === "true" ?? false,
  sentry: {
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN ?? "",
  },
} as Configs;
