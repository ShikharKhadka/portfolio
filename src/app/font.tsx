import { Cormorant_Garamond, Montserrat } from "next/font/google";

export const mont_serrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont_serrat",
  display: "swap",
});

export const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant_garamond",
  display: "swap",
  weight: "300",
});
