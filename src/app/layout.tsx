import "./globals.css";
import { mont_serrat } from "./font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont_serrat.variable}>{children}</body>
    </html>
  );
}
