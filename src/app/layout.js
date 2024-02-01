import { Inter_Tight } from "next/font/google";
import "../styles/globals.css";

const inter = Inter_Tight({
   subsets: ["latin"], 
   weight: ['400','500']
});

export const metadata = {
  title: "Focal Point",
  description: "Projeto desafio do Processo Seletivo da Empresa Legaplan.",
};

export default function RootLayout({children, modal}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}{modal}</body>
    </html>
  );
}
