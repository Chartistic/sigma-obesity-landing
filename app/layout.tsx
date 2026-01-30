import "./globals.css";
import { Mona_Sans } from "next/font/google";
import { NoItalic } from "./NoItalic";

const monaSans = Mona_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: "normal",
  display: "swap",
  variable: "--font-mona",
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
    <html lang="en" className={monaSans.variable} style={{ fontStyle: "normal" }}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: noItalicCSS }} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=assignment_turned_in,cognition,dew_point,supervised_user_circle,water_drop,work_history"
        />
      </head>
      <body id="obesity-app" className="min-h-screen font-sans" style={{ fontStyle: "normal" }}>
        <NoItalic />
        {children}
      </body>
    </html>
  );
}
