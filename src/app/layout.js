import { Outfit } from "next/font/google";
import "./globals.css";
import SecurityProvider from "../components/SecurityProvider";
import SpotifyPlayer from "../components/SpotifyPlayer";

const outfit = Outfit({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit'
});

export const metadata = {
  title: "Krisnavaro Raihananta | Portfolio",
  description: "Portofolio kreatif Krisnavaro Raihananta - Pengembang Web & UI/UX.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans">
        <SecurityProvider>
          {children}
          <SpotifyPlayer />
        </SecurityProvider>
      </body>
    </html>
  );
}
