import "./globals.css";
import localFont from "next/font/local";

const monaSans = localFont({
  src: "../public/fonts/MonaSans-Variable.woff2",
  variable: "--font-mona",
  display: "swap",
  style: "normal",
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
