import { locales } from "../localeLoader";

export default function LanguageSwitcher({ locale, handleLocaleChange }) {
  return (
    <select
      value={locale}
      onChange={(e) => handleLocaleChange(e.target.value)}
      className="px-4 py-2 text-gray-200 font-medium bg-gray-900 rounded-lg outline outline-2 outline-yellow-400 cursor-pointer"
    >
      {/* Map over the `locales` array defined in locale loader */}
      {Object.keys(locales).map((key) => (
        <option value={key} key={key}>
          {locales[key]}
        </option>
      ))}
    </select>
  );
}
