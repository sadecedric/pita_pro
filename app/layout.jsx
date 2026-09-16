import './globals.css';

export const metadata = {
  title: 'Pita Pro Assistant',
  description: 'Assistant expert en pronostics sportifs',
  icons: {
    icon: '/pita.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
