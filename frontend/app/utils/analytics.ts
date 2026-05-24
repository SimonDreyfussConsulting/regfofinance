// GA4 Event Tracking
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track affiliate clicks
export const trackAffiliateClick = (
  lender: string,
  productType: string,
  position?: string
) => {
  if (typeof window !== 'undefined') {
    // GA4 Event
    if ((window as any).gtag) {
      (window as any).gtag('event', 'click_affiliate', {
        lender: lender,
        product_type: productType,
        position: position || 'unknown',
        page_location: window.location.pathname,
      });
    }

    // GTM DataLayer Push
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'affiliate_click',
        lender: lender,
        productType: productType,
        position: position,
      });
    }
  }
};

// Track Web Vitals
export const sendWebVitals = ({ id, name, label, value }: any) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', name, {
      event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      event_label: id,
      non_interaction: true,
    });
  }
};

// Track page views manually if needed
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-FT00EHZ49B', {
      page_path: url,
    });
  }
};
