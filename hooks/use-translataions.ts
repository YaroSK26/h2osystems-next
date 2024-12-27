"use client";

import { useState, useEffect } from "react";

export const useTranslations = () => {
  const [translations, setTranslations] = useState(null);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        // Get stored language or default to Slovak
        const storedLang = localStorage.getItem("language") || "sk";

        // Load translations for stored language
        const response = await fetch(`/locales/${storedLang}.json`);
        const data = await response.json();
        setTranslations(data);
      } catch (err) {
        console.error("Error loading translations:", err);
      }
    };

    // Load translations on mount
    if (typeof window !== "undefined") {
      loadTranslations();
    }

    // Listen for language changes
    const handleLanguageChange = (event: CustomEvent) => {
      if (event.detail && event.detail.translations) {
        setTranslations(event.detail.translations);
      }
    };

    window.addEventListener(
      "languageChange",
      handleLanguageChange as EventListener
    );
    return () =>
      window.removeEventListener(
        "languageChange",
        handleLanguageChange as EventListener
      );
  }, []);

  return translations;
};
