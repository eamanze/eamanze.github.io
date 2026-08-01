import { Moon, Sun } from "lucide-react";
import type { Theme } from "@/hooks/use-theme";

export function ThemeToggle({ theme, toggle }: { theme: Theme; toggle: () => void }) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface-2/70 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
    >
      {isDark ? <Moon className="size-4" aria-hidden /> : <Sun className="size-4" aria-hidden />}
    </button>
  );
}