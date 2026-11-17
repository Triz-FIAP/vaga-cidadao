import './globals.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";
import { NavBarComponent } from "../utilidades/components/NavBar/NavBarComponent";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return <div className={` ${plusJakartaSans.variable} antialiased`}>
    <QueryClientProvider client={queryClient}>
      <NavBarComponent />
      <Component {...pageProps} /></QueryClientProvider>
  </div>;
}
