import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
   subsets: ["latin"], 
   weight: ['400','500']
});

export const metadata = {
  title: "Focal Point",
  description: "Projeto desafio do Processo Seletivo da Empresa Legaplan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
