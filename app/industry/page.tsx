"use client"

import { Navigation } from "@/components/navigation"
import { IndustryPage } from "@/components/industry-page"
import { Footer } from "@/components/footer"

export default function Industry() {
    return (
        <main className="bg-codGray font-sans antialiased">
            <Navigation />
            <IndustryPage />
            <Footer />
        </main>
    )
}
