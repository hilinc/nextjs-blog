// `app/layout.tsx`
import { GoogleTagManager } from "@next/third-parties/google";
import { Metadata } from "next";
import "../styles/global.css";

export const metadata: Metadata = {
  title: "Knock Off Early",
  description: "Let me help you knock off early!",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleTagManager gtmId="GTM-P76MP7QR" />
    </html>
  );
}
