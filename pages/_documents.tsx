import { Html, Head, Main, NextScript } from "next/document";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["600"],
  style: ["normal", "italic"],
});

export default function Document() {
  return (
    <Html lang="en" className={`${notoSans.variable} h-full antialiased`}>
      <Head />

      <body className="min-h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
