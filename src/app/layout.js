import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const outfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovoFont = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "My Personal Portfolio",
  description: "Created by me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfitFont.variable} ${ovoFont.variable} antialiased dark:bg-dark-theme text-gray-900 dark:text-white`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
