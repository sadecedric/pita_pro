import './globals.css';

export const metadata = {
  title: 'Pita Pro Assistant',
  description: "Assistant Apple of Fortune — Pita Pro",
  icons: {
    icon: '/apple.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
