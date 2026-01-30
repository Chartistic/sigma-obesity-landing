import "./globals.css";
import localFont from "next/font/local";

const monaSans = localFont({
  src: [
    { path: "../public/fonts/MonaSans-Regular.woff2", style: "normal", weight: "400" },
    { path: "../public/fonts/MonaSans-SemiBold.woff2", style: "normal", weight: "600" },
    { path: "../public/fonts/MonaSans-Bold.woff2", style: "normal", weight: "700" },
  ],
  variable: "--font-mona",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={monaSans.variable}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
