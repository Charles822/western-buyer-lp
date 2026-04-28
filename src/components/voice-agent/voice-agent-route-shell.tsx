'use client';

import { useEffect } from 'react';

const BODY_CLASS = 'voice-agent-lp';
const HTML_PAINT_CLASS = 'voice-agent-paint';

export function VoiceAgentRouteShell({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.documentElement.classList.add(HTML_PAINT_CLASS);
    document.body.classList.add(BODY_CLASS);
    return () => {
      document.documentElement.classList.remove(HTML_PAINT_CLASS);
      document.body.classList.remove(BODY_CLASS);
    };
  }, []);

  return <div className={className}>{children}</div>;
}
