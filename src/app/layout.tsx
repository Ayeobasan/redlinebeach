import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Redline Leisure & Resorts — Free Your Mind!",
  description:
    "Discover a refreshing coastal escape at Redline Leisure & Resorts. Swimming pool, exotic bar, beach front, event spaces, games, karaoke and group dining — all set in a tranquil natural environment.",
  keywords: [
    "Redline Leisure",
    "beach resort",
    "leisure resort Nigeria",
    "swimming pool",
    "event center",
    "beach front",
    "group dining",
    "karaoke",
    "cabana",
    "VIP Glass House",
    "Wunder Bar",
  ],
  openGraph: {
    title: "Redline Leisure & Resorts — Free Your Mind!",
    description:
      "Beautiful ocean views, exciting experiences and unforgettable moments at Redline Leisure & Resorts.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
