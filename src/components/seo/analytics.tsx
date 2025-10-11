'use client';

import { useEffect } from 'react';

interface AnalyticsProps {
  googleAnalyticsId?: string;
  gtmId?: string;
  hotjarId?: string;
}

export function Analytics({ googleAnalyticsId, gtmId, hotjarId }: AnalyticsProps) {
  useEffect(() => {
    // Google Analytics 4
    if (googleAnalyticsId) {
      // Load gtag script
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${googleAnalyticsId}', {
          page_title: document.title,
          page_location: window.location.href,
        });
      `;
      document.head.appendChild(script2);
    }

    // Google Tag Manager
    if (gtmId) {
      const script1 = document.createElement('script');
      script1.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');
      `;
      document.head.appendChild(script1);

      const noscript = document.createElement('noscript');
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
      iframe.height = '0';
      iframe.width = '0';
      iframe.style.display = 'none';
      iframe.style.visibility = 'hidden';
      noscript.appendChild(iframe);
      document.body.insertBefore(noscript, document.body.firstChild);
    }

    // Hotjar
    if (hotjarId) {
      const script1 = document.createElement('script');
      script1.innerHTML = `
        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:${hotjarId},hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `;
      document.head.appendChild(script1);
    }

    // Cleanup function
    return () => {
      // Remove scripts if component unmounts
      const scripts = document.querySelectorAll('script[data-analytics]');
      scripts.forEach(script => script.remove());
    };
  }, [googleAnalyticsId, gtmId, hotjarId]);

  return null;
}

// Page view tracking hook
export function usePageView(gaId?: string) {
  useEffect(() => {
    // Track page changes for SPA
    const handleRouteChange = () => {
      if (typeof window !== 'undefined' && window.gtag && gaId) {
        window.gtag('config', gaId, {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Listen for route changes
    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', handleRouteChange);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('popstate', handleRouteChange);
      }
    };
  }, [gaId]);
}

// Custom event tracking
export const trackEvent = (action: string, category?: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Declare global types
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}