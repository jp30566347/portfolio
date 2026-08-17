import {
  Bricolage_Grotesque,
  IBM_Plex_Mono,
  Source_Sans_3,
} from "next/font/google";

// Display: characterful grotesque for headings.
export const display = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

// Body: quiet humanist sans that reads well in French and English.
export const body = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

// Labels, page numbers, stat captions.
export const mono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});
