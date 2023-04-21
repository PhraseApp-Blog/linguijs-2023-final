import { i18n } from "@lingui/core";
import { en, cs, ar } from "make-plural/plurals";

export const locales = {
  "en-US": "English",
  "cs-CZ": "Czech",
  "ar-EG": "Arabic",
};

export const defaultLocale = "en-US";

i18n.loadLocaleData({
  en: { plurals: en },
  cs: { plurals: cs },
  "ar-EG": { plurals: ar },
});

// Load and activate default locale first before dynamic loading
i18n.load(defaultLocale, {});
i18n.activate(defaultLocale);

// Get the currently active locale and load it dynamically
export async function loadMessage(locale) {
  const { messages } = await import(`./locales/${locale}/messages`);
  i18n.load(locale, messages);
  i18n.activate(locale);
  // Change the `dir` value of `html` dynamically on locale change
  locale === "ar-EG" ? (document.getElementById("html").dir = "rtl") : "ltr";
}
