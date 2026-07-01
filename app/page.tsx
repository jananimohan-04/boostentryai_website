"use client"

import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { SuccessStoryKSSHome } from "@/components/success-story-kss"
import { QuickDemo } from "@/components/quick-demo"
import { CallToAction } from "@/components/call-to-action"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
    return (
        <main className="bg-codGray font-sans antialiased">
            <Navigation />
            <Hero />
            <SuccessStoryKSSHome />
            <QuickDemo />
            <CallToAction />
            <Contact />
            <Footer />
        </main>
    )
}
