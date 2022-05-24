interface Configs {
  env: "development" | "production";
  isDebug: boolean;

}

export const configs = {
  env: process.env.NEXT_PUBLIC_ENV || "development",
  isDebug: process.env.NEXT_PUBLIC_DEBUG === "true" ?? false,

} as Configs;
