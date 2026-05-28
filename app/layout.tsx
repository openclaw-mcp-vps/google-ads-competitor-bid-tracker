import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AdBidTracker – Track Competitor Google Ads Bids",
  description: "Monitor competitor ad positions and estimate bid amounts across target keywords with trend analysis. Built for PPC managers and digital marketing agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="73e32d35-f6cf-4791-b2ea-bd415a71bc46"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
