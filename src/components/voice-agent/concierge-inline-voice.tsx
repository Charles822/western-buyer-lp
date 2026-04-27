'use client';

import { Icon } from '@iconify/react';
import { Loader2 } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Vapi from '@vapi-ai/web';

const CONSENT_STORAGE_KEY = 'convertree-voice-demo-consent';
const CONSENT_TITLE = 'Before the demo';
const CONSENT_TEXT =
  'This voice demo may be recorded to improve the experience. By continuing, you agree to a short test call. Use a microphone and a quiet place.';

type CallUiStatus = 'idle' | 'connecting' | 'active';

type TranscriptLine = { role: 'user' | 'assistant'; text: string };

function parseTranscriptMessage(m: unknown): TranscriptLine | null {
  if (!m || typeof m !== 'object') {
    return null;
  }
  const msg = m as Record<string, unknown>;
  if (msg.type === 'transcript' && typeof msg.transcript === 'string' && msg.transcript.trim()) {
    const role: 'user' | 'assistant' =
      msg.role === 'user' ? 'user' : 'assistant';
    return { role, text: msg.transcript.trim() };
  }
  return null;
}

function isCallEndedMessage(m: unknown): boolean {
  if (!m || typeof m !== 'object') {
    return false;
  }
  const msg = m as Record<string, unknown>;
  return msg.type === 'status-update' && msg.status === 'ended';
}

type ConciergeInlineVoiceProps = {
  publicKey: string;
  assistantId: string;
};

export function ConciergeInlineVoice({ publicKey, assistantId }: ConciergeInlineVoiceProps) {
  const vapiRef = useRef<Vapi | null>(null);
  const [consentOk, setConsentOk] = useState(false);
  const [status, setStatus] = useState<CallUiStatus>('idle');
  const [transcript, setTranscript] = useState<TranscriptLine[]>([]);
  const [error, setError] = useState<string | null>(null);
  const transcribeEndRef = useRef<HTMLDivElement | null>(null);
  const [portalReady, setPortalReady] = useState(false);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (localStorage.getItem(CONSENT_STORAGE_KEY) === '1') {
      setConsentOk(true);
    }
  }, []);

  useEffect(() => {
    if (!publicKey || !assistantId) {
      return;
    }
    const vapi = new Vapi(publicKey);
    vapiRef.current = vapi;

    const onMessage = (m: unknown) => {
      if (isCallEndedMessage(m)) {
        setStatus('idle');
        return;
      }
      const line = parseTranscriptMessage(m);
      if (line) {
        setTranscript((prev) => {
          const last = prev[prev.length - 1];
          if (last && last.role === line.role && last.text === line.text) {
            return prev;
          }
          return [...prev, line];
        });
      }
    };

    const onCallStart = () => {
      setStatus('active');
    };

    const onCallEnd = () => {
      setStatus('idle');
    };

    const onVapiError = (e: unknown) => {
      if (process.env.NODE_ENV === 'development') {
        console.error('Vapi inline:', e);
      }
      const err =
        e && typeof e === 'object' && 'error' in e
          ? (e as { error?: { message?: string } }).error
          : e;
      const message =
        err && typeof err === 'object' && err !== null && 'message' in err
          ? String((err as { message?: unknown }).message)
          : typeof e === 'string'
            ? e
            : 'Call error. Check your connection and try again.';
      setError(message);
      setStatus('idle');
    };

    vapi.on('message', onMessage);
    vapi.on('call-start', onCallStart);
    vapi.on('call-end', onCallEnd);
    vapi.on('error', onVapiError);

    return () => {
      vapi.removeAllListeners();
      vapi.stop().catch(() => undefined);
      vapiRef.current = null;
    };
  }, [publicKey, assistantId]);

  useEffect(() => {
    transcribeEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [transcript]);

  const handleAcceptConsent = () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, '1');
    setConsentOk(true);
  };

  const startCall = useCallback(async () => {
    const vapi = vapiRef.current;
    if (!vapi) {
      return;
    }
    setError(null);
    setTranscript([]);
    setStatus('connecting');
    try {
      await vapi.start(assistantId);
    } catch (e) {
      setStatus('idle');
      setError(
        e instanceof Error ? e.message : 'Could not start the call. Please try again.'
      );
    }
  }, [assistantId]);

  const endCall = useCallback(() => {
    vapiRef.current?.end();
  }, []);

  if (!consentOk) {
    return (
      <div className="rounded-xl border border-zinc-600/60 bg-zinc-950/40 p-6">
        <h4 className="text-sm font-semibold text-white">{CONSENT_TITLE}</h4>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{CONSENT_TEXT}</p>
        <button
          type="button"
          onClick={handleAcceptConsent}
          className="mt-5 w-full rounded-full bg-zinc-100 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-white"
        >
          Continue
        </button>
      </div>
    );
  }

  const showFloatingPanel = status === 'connecting' || status === 'active';

  const floatingPanel = (
    <div
      className="pointer-events-auto fixed z-200 flex h-[min(70dvh,28rem)] w-[min(100vw-2rem,24rem)] flex-col overflow-hidden rounded-2xl border border-zinc-600/80 bg-zinc-950/95 text-zinc-100 shadow-2xl ring-1 ring-zinc-700/50 backdrop-blur-md"
      style={{ right: 'max(1rem, env(safe-area-inset-right))', bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
      role="dialog"
      aria-label="Voice demo"
    >
      <div className="shrink-0 border-b border-zinc-800/90 px-4 py-3">
        <p className="text-sm font-medium text-zinc-100">Convertree concierge</p>
        <p className="text-xs text-zinc-500">
          {status === 'active'
            ? 'Listening…'
            : status === 'connecting'
              ? 'Connecting…'
              : '—'}
        </p>
      </div>
      <div
        className="min-h-0 flex-1 space-y-2 overflow-y-auto overscroll-contain p-4 text-sm [scrollbar-gutter:stable]"
        aria-live="polite"
      >
        {transcript.length === 0 ? (
          <p className="text-zinc-500">
            Transcript will appear here during the call.
          </p>
        ) : (
          transcript.map((line, i) => (
            <div
              key={`${i}-${line.role}-${line.text.slice(0, 12)}`}
              className={
                line.role === 'user'
                  ? 'ml-4 rounded-2xl bg-emerald-600/20 px-3 py-2 text-right text-zinc-100'
                  : 'mr-4 rounded-2xl bg-zinc-800/80 px-3 py-2 text-left text-zinc-200'
              }
            >
              {line.text}
            </div>
          ))
        )}
        <div ref={transcribeEndRef} />
      </div>
      <div className="shrink-0 border-t border-zinc-800/90 p-3">
        {status === 'connecting' ? (
          <div className="flex items-center justify-center gap-2 py-2.5 text-sm text-zinc-400">
            <Loader2 className="h-4 w-4 shrink-0 animate-spin" aria-hidden />
            Connecting…
          </div>
        ) : (
          <button
            type="button"
            onClick={endCall}
            className="w-full rounded-full border border-red-500/50 bg-red-950/40 py-2.5 text-sm font-semibold text-red-200 transition hover:bg-red-950/60"
          >
            End call
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      {error ? (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      ) : null}

      <div className="min-h-0">
        {status === 'idle' && (
          <button
            type="button"
            onClick={startCall}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 py-3.5 text-base font-semibold text-white transition hover:bg-emerald-500"
          >
            <Icon icon="solar:microphone-3-linear" className="text-xl" aria-hidden />
            Start voice demo
          </button>
        )}

        {status === 'connecting' && (
          <div className="flex items-center justify-center gap-2 rounded-2xl border border-zinc-600/50 bg-zinc-950/40 py-4 text-sm text-zinc-300">
            <Loader2 className="h-4 w-4 shrink-0 animate-spin text-emerald-400" aria-hidden />
            Starting demo…
          </div>
        )}

        {status === 'active' && (
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 px-4 py-3 text-center text-sm font-medium text-emerald-200/90">
            Demo ongoing
          </div>
        )}
      </div>

      {portalReady &&
        showFloatingPanel &&
        typeof document !== 'undefined' &&
        createPortal(floatingPanel, document.body)}
    </div>
  );
}
