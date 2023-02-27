import localFont from "next/font/local";

export const visbyFont = localFont({
  src: [
    { path: "./VisbyCF-Thin.woff", weight: "100" },
    { path: "./VisbyCF-Thin.woff2", weight: "100" },

    { path: "./VisbyCF-Light.woff", weight: "300" },
    {
      path: "./VisbyCF-Light.woff2",
      weight: "300",
    },
    {
      path: "./VisbyCF-Regular.woff",
      weight: "400",
    },
    {
      path: "./VisbyCF-Medium.woff2",
      weight: "500",
    },
    {
      path: "./VisbyCF-Medium.woff",
      weight: "500",
    },
    {
      path: "./VisbyCF-Regular.woff2",
      weight: "400",
    },
    {
      path: "./VisbyCF-DemiBold.woff",
      weight: "600",
    },
    {
      path: "./VisbyCF-DemiBold.woff2",
      weight: "600",
    },
    { path: "./VisbyCF-Bold.woff", weight: "700" },
    { path: "./VisbyCF-Bold.woff2", weight: "700" },
    {
      path: "./VisbyCF-ExtraBold.woff",
      weight: "800",
    },
    {
      path: "./VisbyCF-ExtraBold.woff2",
      weight: "800",
    },
    { path: "./VisbyCF-Heavy.woff", weight: "900" },
    {
      path: "./VisbyCF-Heavy.woff2",
      weight: "900",
    },
  ],
  variable: "--visby-font",
});
