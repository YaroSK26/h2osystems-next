"use client";

import Script from "next/script";

const CookieConsent = () => {
  return (
    <Script
      id="cookieyes"
      src="https://cdn-cookieyes.com/client_data/4ab01fae6af0d4d5bf372f1f/script.js"
      strategy="beforeInteractive"
    />
  );
};

export default CookieConsent;
