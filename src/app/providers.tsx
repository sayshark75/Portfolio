// app/providers.tsx
"use client";

import { ScrollContextProvider } from "@/context/ScrollContext";
import { ThemeContextProvider } from "@/context/ThemeProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ScrollContextProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </ScrollContextProvider>
  );
}
