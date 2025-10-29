"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import TanStackProvider from "@/components/providers/TanStackProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <TanStackProvider>
            <ClerkProvider
                appearance={{
                    variables: {
                        colorPrimary: "#e78a53",
                        colorBackground: "#f3f4f6",
                        colorText: "#111827",
                        colorTextSecondary: "#6b7280",
                        colorInputBackground: "#f3f4f6",
                    },
                }}
            >
                <Toaster />
                {children}
            </ClerkProvider>
        </TanStackProvider>
    );
}
