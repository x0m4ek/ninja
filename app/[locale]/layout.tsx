
import { Inter } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import IntlProviderCustom from './components/providers/IntlProvider';
import "./globals.css"
const inter = Inter({ subsets: ['latin'] });


function getBaseUrl() {
  if (typeof window !== 'undefined') {
 
    return '';
  }

  const protocol = 'https';
  const host = process.env.NEXT_PUBLIC_VERCEL_URL || 'localhost:3000'; 
  return `${protocol}://${host}`;
}

async function loadMessages(locale: string) {
  const baseUrl = getBaseUrl();
  const localesDir = `${baseUrl}/locales/${locale}/`; 
  const fileNames = ['common.json', 'whitelabel.json', 'sushi.json'];

  const messages: Record<string, any> = {};

  try {
    for (const fileName of fileNames) {
      const res = await fetch(`${localesDir}${fileName}`);

      if (!res.ok) {
        throw new Error(`Failed to load ${fileName} for locale ${locale}`);
      }

      const fileContent = await res.json();
      const namespace = fileName.replace('.json', ''); // Ім'я як namespace
      messages[namespace] = fileContent;
    }

    return messages;
  } catch (error) {
    console.error('Error loading locale files:', error);
    return await loadFallbackMessages(); // Фолбек до англійської
  }
}

async function loadFallbackMessages() {
  const baseUrl = getBaseUrl();
  const fallbackLocale = 'en';
  const fallbackDir = `${baseUrl}/locales/${fallbackLocale}/`;
  const fileNames = ['common.json', 'navigation.json', 'footer.json'];

  const fallbackMessages: Record<string, any> = {};

  for (const fileName of fileNames) {
    const res = await fetch(`${fallbackDir}${fileName}`);
    if (res.ok) {
      const fileContent = await res.json();
      const namespace = fileName.replace('.json', '');
      fallbackMessages[namespace] = fileContent;
    }
  }

  return fallbackMessages;
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await loadMessages(params.locale);

  return (
    <html lang={params.locale}>
      <body className={`${inter.className} antialiased`} id="body">
        <IntlProviderCustom locale={params.locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </IntlProviderCustom>
      </body>
    </html>
  );
}
