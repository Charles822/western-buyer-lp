'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function SetHtmlLang({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const isEn =
      pathname.startsWith('/en') || pathname.startsWith('/voice-agent');
    document.documentElement.lang = isEn ? 'en' : 'zh';
  }, [pathname]);

  return <>{children}</>;
}
