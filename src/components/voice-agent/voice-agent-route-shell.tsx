'use client';

import { useEffect } from 'react';

const BODY_CLASS = 'voice-agent-lp';

export function VoiceAgentRouteShell({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.classList.add(BODY_CLASS);
    return () => document.body.classList.remove(BODY_CLASS);
  }, []);

  return <div className={className}>{children}</div>;
}
