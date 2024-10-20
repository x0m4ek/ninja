import { Inter } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import IntlProviderCustom from './components/providers/IntlProvider';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

// Функція для отримання базового URL залежно від оточення
function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return ''; // Для клієнтського коду повертаємо пустий рядок
  }

  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'https';
  const host = process.env.NEXT_PUBLIC_VERCEL_URL || 'localhost:3000';
   // Дефолтно використовуємо localhost
   console.log('host',host)
  return `${protocol}://ninja-dbbl.vercel.app/`;
}

// Функція для завантаження локальних повідомлень
async function loadMessages(locale: string) {
  try {
    const baseUrl = getBaseUrl();  // Отримуємо базовий URL
    const localesDir = `${baseUrl}/locales/${locale}/`;  // Директорія з локалізаціями
    const fileNames = ['common.json', 'whitelabel.json', 'sushi.json'];  // Імена файлів

    const messages: Record<string, any> = {};

    for (const fileName of fileNames) {
      const url = `${localesDir}${fileName}`;  // Формуємо URL для кожного файлу
      console.log(`Завантаження локалізації з: ${url}`);  // Лог для перевірки шляху
      const res = await fetch(url);  // Завантажуємо файл

      if (!res.ok) {
        throw new Error(`Failed to load ${fileName} for locale ${locale}`);  // Якщо не вдається завантажити
      }

      const fileContent = await res.json();  // Отримуємо контент файлу
      const namespace = fileName.replace('.json', '');  // Ім'я файлу як namespace
      messages[namespace] = fileContent;  // Зберігаємо в об'єкт
    }

    return messages;  // Повертаємо об'єкт з повідомленнями
  } catch (error) {
    console.error('Error loading locale files:', error);  // Виводимо помилку
    return await loadFallbackMessages();  // Фолбек на англійську мову
  }
}

// Функція для фолбеку на англійську мову
async function loadFallbackMessages() {
  const baseUrl = getBaseUrl(); // Отримуємо базовий URL
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
    } else {
      console.error(`Failed to load fallback file: ${fileName}`);
    }
  }

  return fallbackMessages;
}

// Головний компонент Layout
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  try {
    // Завантажуємо повідомлення для вибраної локалі
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
  } catch (error) {
    console.error('Failed to load messages or render layout:', error);

    // Показуємо сторінку помилки
    return (
      <html lang="en">
        <body className={`${inter.className} antialiased`} id="body">
          <div>Error loading page</div>
        </body>
      </html>
    );
  }
}
