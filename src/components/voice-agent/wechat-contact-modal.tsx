'use client';

import { Icon } from '@iconify/react';
import { useEffect, useId } from 'react';

type WeChatContactModalProps = {
  open: boolean;
  onClose: () => void;
};

export function WeChatContactModal({ open, onClose }: WeChatContactModalProps) {
  const titleId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label="Close"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-[101] w-full max-w-sm rounded-2xl border border-zinc-600/80 bg-zinc-900 p-6 shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
          aria-label="Close dialog"
        >
          <Icon icon="solar:close-circle-linear" className="size-6" />
        </button>
        <h2 id={titleId} className="pr-10 text-xl font-semibold tracking-tight text-white">
          Let&apos;s talk on WeChat
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          Scan the QR code to add us—we&apos;ll pick up there.
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element -- static asset from /public */}
        <img
          src="/talk_to_sam_on_wechat.jpg"
          alt="WeChat QR code to talk to Sam on WeChat"
          className="mx-auto mt-6 max-h-[min(70vh,420px)] w-full max-w-[280px] rounded-lg object-contain"
        />
        <p className="mt-4 text-center text-sm text-zinc-400">
          Or email{' '}
          <a
            href="mailto:sam@convertree.com"
            className="font-medium text-emerald-400 hover:text-emerald-300 hover:underline"
          >
            sam@convertree.com
          </a>
        </p>
      </div>
    </div>
  );
}
