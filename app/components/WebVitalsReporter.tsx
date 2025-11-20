'use client';

import { useReportWebVitals } from 'next/web-vitals';
import { sendWebVitals } from '@/app/utils/analytics';

export default function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    sendWebVitals(metric);
  });

  return null;
}
