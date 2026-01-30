import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ fontStyle: "normal" }}>
      <body className="min-h-screen font-sans not-italic" style={{ fontStyle: "normal" }}>
        {children}
      </body>
    </html>
  );
}
