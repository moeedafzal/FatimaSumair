import Navbar from "../components/global/Navbar";
import "./globals.css";
import Head from "next/head";
import Footer from "../components/global/Footer";

export const metadata = {
  title: "Fatima Sumair",
  description: "Fatima Sumair Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'"
        />
        {/* This icon should stay in the app directory. Not sure why but this is the only way Next v14 supports it currently */}
        <link rel="shortcut icon" href="/icon.ico" />
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
