import Layout from "@/components/Layout/Layout";

import { Montserrat } from "next/font/google";
import { NotificationContextProvider } from "@/store/NotificationContext";
import "@/styles/globals.css";

const montserrat = Montserrat({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <NotificationContextProvider>
        <Layout montserrat={montserrat.className}>
          <Component {...pageProps} />
        </Layout>
      </NotificationContextProvider>
    </>
  );
}
