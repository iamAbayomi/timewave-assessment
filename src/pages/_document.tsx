import Grotesk from "@/components/fonts/grotesk";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Grotesk />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
