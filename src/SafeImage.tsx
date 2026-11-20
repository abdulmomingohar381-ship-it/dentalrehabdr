import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fallbackTitle?: string;
}

export function SafeImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fallbackTitle = 'Dental Rehab',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#DDEFEA] via-[#F8FBFA] to-[#DDEFEA] text-[#176B68] p-6 text-center ${className}`}
      >
        <div className="w-12 h-12 rounded-full bg-white/90 border border-[#75C9C3]/40 flex items-center justify-center mb-3">
          <Sparkles className="w-5 h-5 text-[#176B68]" aria-hidden="true" />
        </div>
        <span className="font-display text-sm font-semibold text-[#203A39]">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
