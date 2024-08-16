// text : Port Lligat Sans
import { Inter, Stick_No_Bills, Port_Lligat_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const stick = Stick_No_Bills({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-bills",
  adjustFontFallback: false,
});

const port = Port_Lligat_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-port",
  adjustFontFallback: false,
});

export const metadata = {
  title: "Compufest 2024",
  description: "🎉 Get Ready for COMPUFEST 2k24!🎉",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${stick.variable} ${port.variable}`}>{children}</body>
    </html>
  );
}
