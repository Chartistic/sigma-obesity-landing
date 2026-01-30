import "./globals.css";
import { Inter } from "next/font/google";
import { NoItalic } from "./NoItalic";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: "normal",
  display: "swap",
  variable: "--font-inter",
});

const noItalicCSS = `
  #obesity-app,#obesity-app *,#obesity-app *::before,#obesity-app *::after,
  html,body,body *,body *::before,body *::after,em,i{font-style:normal!important}
  *{font-synthesis:none!important}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} style={{ fontStyle: "normal" }}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: noItalicCSS }} />
      </head>
      <body id="obesity-app" className="min-h-screen font-sans" style={{ fontStyle: "normal" }}>
        <NoItalic />
        {children}
      </body>
    </html>
  );
}
