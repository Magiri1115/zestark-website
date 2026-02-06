'use client';

import { useEffect } from 'react';

export default function ShinobiTracker() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//xa.shinobi.jp/ufo/192196600';
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <noscript>
      <a href="//xa.shinobi.jp/bin/gg?192196600" target="_blank" rel="noopener noreferrer">
        <img
          src="//xa.shinobi.jp/bin/ll?192196600"
          style={{ border: 0 }}
          alt="Shinobi Tracker"
        />
      </a>
    </noscript>
  );
}
