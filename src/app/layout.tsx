import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'EXSORA — L\'académie du recrutement et des talents',
  description: 'Plateforme de formation professionnelle en Executive Search, recrutement, sourcing et gestion des talents.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-exsora-cream text-exsora-black">
        {children}
      </body>
    </html>
  );
}
