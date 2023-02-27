import localFont from "next/font/local";

export const catalinaFont = localFont({
  src: [
    { path: "./SunnyCatalina_Light.otf", weight: "300" },
    {
      path: "./SunnyCatalina_Bold.otf",
      weight: "700",
    },
  ],
  variable: "--catalina-font",
});
