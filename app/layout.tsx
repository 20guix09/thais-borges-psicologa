import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thais Borges | Psicóloga Clínica em Londrina e Online",
  description: "Psicoterapia para mulheres em Londrina e online. Atendimento acolhedor para ansiedade, compulsão alimentar, conflitos com o corpo, emoções e história pessoal.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/images/monograma-tb.png",
    shortcut: "/images/monograma-tb.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
