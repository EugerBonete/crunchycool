"use client";

import QueryProvider from "./query-provider";
import { ThemeProvider } from "./theme-provider";
import { NextUI } from "./NextUI";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <NextUI>{children}</NextUI>
      </ThemeProvider>
    </QueryProvider>
  );
}
