'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IntlProvider } from 'next-intl';
import { ReactNode } from 'react';

type IntlProviderCustomProps = {
  children: ReactNode;
  locale: string;
  messages: Record<string, any>; 
};

export default function IntlProviderCustom({
  children,
  locale,
  messages,
}: IntlProviderCustomProps) {
  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}
