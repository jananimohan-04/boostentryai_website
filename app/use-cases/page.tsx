"use client"

import { Navigation } from "@/components/navigation"
import { UseCasesPage } from "@/components/use-cases-page"
import { Footer } from "@/components/footer"

export default function UseCases() {
    return (
        <main className="bg-codGray font-sans antialiased">
            <Navigation />
            <UseCasesPage />
            <Footer />
        </main>
    )
}
