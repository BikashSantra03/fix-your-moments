const THEME_STORAGE_KEY = "fym-theme";

const script = `
(function () {
  try {
    var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
    var theme = stored === "light" || stored === "dark" ? stored : "dark";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
`;

// Blocking inline script so data-theme is set before first paint — a React effect runs too late and causes a flash.
export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

export { THEME_STORAGE_KEY };
