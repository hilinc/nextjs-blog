import { GoogleTagManager } from "@next/third-parties/google";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleTagManager gtmId="GTM-P76MP7QR" />
    </html>
  );
}
