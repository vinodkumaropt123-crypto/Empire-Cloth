import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import LocalSEOSchema from '@/components/local-seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Empire Clothing Hub | Best Clothing Store in Dadri, Uttar Pradesh",
  description: "Discover Empire Clothing Hub by Vipin Baisla in Dadri, Uttar Pradesh. Premium fashion destination for readymade garments, men's, women's & kids wear. Shop high quality ethnic & casual attire near you.",
  keywords: "Clothing Store in Dadri, Best Clothing Store in Dadri, Fashion Store in Dadri, Men's Clothing Store in Dadri, Women's Clothing Store in Dadri, Kids Clothing Store in Dadri, Readymade Garments Store in Dadri, Trendy Clothing Shop in Dadri, Best Fashion Shop Near Me, Garment Store in Dadri, Empire Clothing Dadri, Vipin Baisla",
  openGraph: {
    title: "Empire Clothing Hub | Premium Clothing Store in Dadri",
    description: "Upgrade your style with high-quality fabrics, trendiest outfits, and traditional wear at Empire Clothing Hub, Dadri. Curated collections by Vipin Baisla.",
    url: "https://empireclothinghub.com",
    siteName: "Empire Clothing Hub",
    images: [
      {
        url: "https://picsum.photos/seed/empire-og/1200/630",
        width: 1200,
        height: 630,
        alt: "Empire Clothing Hub Dadri Store Front",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Empire Clothing Hub | Best Fashion Shop in Dadri",
    description: "Premium Men's, Women's, and Kids' Wear at Railway Road, Dadri. Visit today for the best prices and quality fabrics.",
    images: ["https://picsum.photos/seed/empire-tw/1200/630"],
  },
  alternates: {
    canonical: "https://empireclothinghub.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <LocalSEOSchema />
        {/* Fallback script to prevent theme flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem('empire-theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[#fdfdfd] text-[#0a0a0a] dark:bg-[#0a0a0a] dark:text-white transition-colors duration-300 min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
