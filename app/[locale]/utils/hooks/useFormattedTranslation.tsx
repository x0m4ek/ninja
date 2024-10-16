import { useTranslations, RichTranslationValues } from "next-intl";
import { ReactNode } from "react";

type RichFormatHandler = (key: string, values?: RichTranslationValues) => ReactNode;

function useFormattedTranslation(namespace: string) {
  const t = useTranslations(namespace);

  
  const rich: RichFormatHandler = (key, values) =>
    t.rich(key, {
      highlight: (children) => <span className="highlight">{children}</span>,
      br: () => <br />,
      
      ...values,
    });

  return { t, rich };
}

export default useFormattedTranslation;
