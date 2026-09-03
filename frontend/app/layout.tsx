import "./globals.css";

export const metadata = {
  title: "Vishal Kachhap | Full Stack Developer",
  description: "The portfolio of Vishal Kachhap, a full stack developer building useful, beautiful things for the web.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
