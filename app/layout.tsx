import "./globals.css";

const noItalicCSS = `
  *, *::before, *::after { font-style: normal !important; }
  em, i { font-style: normal !important; }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: noItalicCSS }} />
      </head>
      <body className="min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
