import "./globals.css";

export const metadata = {
    title: "CODE A CODE",
    description: "Empresa de software | Desenvolvimento de sistema web e sites",
    openGraph: {
        title: "CODE A CODE - Transformando ideias em Negócios",
        description: "Desenvolvimento de sistemas web e sites",

    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">

    <body>
    {children}
    </body>
    </html>
  );
}
