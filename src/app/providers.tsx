// app/providers.tsx
"use client";

import { ScrollContextProvider } from "@/context/ScrollContext";
import { ThemeContextProvider } from "@/context/ThemeProvider";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ScrollContextProvider>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} // Ensure this key is defined
        scriptProps={{
          async: true, // Load the script asynchronously
          defer: true, // Defer script loading
        }}
        container={{
          parameters: {
            badge: "bottomleft",
          },
        }}
      >
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </GoogleReCaptchaProvider>
    </ScrollContextProvider>
  );
}
