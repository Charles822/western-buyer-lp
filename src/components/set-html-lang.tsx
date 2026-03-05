'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function SetHtmlLang({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = pathname.startsWith('/en') ? 'en' : 'zh';
  }, [pathname]);

  return <>{children}</>;
}
