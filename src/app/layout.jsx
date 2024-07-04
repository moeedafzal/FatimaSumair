import Navbar from "../components/global/Navbar";
import "./globals.css";
import Head from "next/head";
import Footer from "../components/global/Footer";

const meta = {
  title: "Fatima Sumair",
  description: "Fatima Sumair Portfolio",
  type: "website",
  url: "https://fatimasumair.com",
  images: ["https://fatimasumair.com/images/utils/og_website_display.png"],
};

export const metadata = {
  ...meta,
  openGraph: {
    ...meta,
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        {/* This icon should stay in the app directory. Not sure why but this is the only way Next v14 supports it currently */}
        <link rel="shortcut icon" href="/icon.ico" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'"
        />
      </Head>
      <html lang="en">
        <body className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow back-cream">{children}</div>
          <Footer />
        </body>
      </html>
    </>
  );
}
