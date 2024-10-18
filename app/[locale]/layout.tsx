/* eslint-disable @typescript-eslint/no-explicit-any */
import { Inter } from 'next/font/google';
import fs from 'fs';
import path from 'path';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import IntlProviderCustom from './components/providers/IntlProvider';

const inter = Inter({ subsets: ['latin'] });

async function loadMessages(locale: string) {
  const localesDir = path.resolve('./public/locales', locale);
  const messages: Record<string, any> = {};

  try {
    const files = fs.readdirSync(localesDir); // Читання всіх файлів у директорії локалі

    for (const file of files) {
      if (file.endsWith('.json')) {
        const filePath = path.join(localesDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const namespace = file.replace('.json', '');
        messages[namespace] = JSON.parse(fileContent);
      }
    }
  } catch (error) {
    console.error(`Error loading messages for locale ${locale}:`, error);
    // Якщо не вдається знайти локаль, підвантажити запасну англійську
    const fallbackDir = path.resolve('./public/locales/en');
    const files = fs.readdirSync(fallbackDir);

    for (const file of files) {
      if (file.endsWith('.json')) {
        const filePath = path.join(fallbackDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const namespace = file.replace('.json', '');
        messages[namespace] = JSON.parse(fileContent);
      }
    }
  }

  return messages;
}

async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await loadMessages(params.locale);


  
  return (
    <html lang={params.locale}>
      <body className={`${inter.className} antialiased`} id='body'>
   
        <IntlProviderCustom locale={params.locale} messages={messages} >

     
          <Navbar />
   
          {children}

          <Footer />
        </IntlProviderCustom>
   
      </body>
    </html>
  );
}

export default RootLayout;
