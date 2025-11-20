export default function GTMNoscript() {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-N6J4F5KQ';

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}
