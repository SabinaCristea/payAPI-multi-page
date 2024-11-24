import { DM_Serif_Display } from "next/font/google";
import "./_styles/globals.css";
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";

// const serifDisplay = localFont({
//   src: "./fonts/DMSerifDisplay-Regular.ttf",
//   variable: "--font-serif-display",
//   weight: "400",
// });

const serifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export const metadata = {
  title: {
    template: "%s | PayAPI",
    default: "Home | PayAPI",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${serifDisplay.className} antialiased flex flex-col min-h-screen overflow-x-hidden`}
      >
        <Navigation />

        <main className="flex-1 mx-[16.5rem]  ">{children}</main>
        <div className="bg-[var(--foreground)] overflow-hidden relative">
          <Footer />
        </div>
      </body>
    </html>
  );
}
