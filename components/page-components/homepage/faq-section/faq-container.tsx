"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from '@/lib/utils'

export default function FAQSection() {
    const [activeTab, setActiveTab] = useState('General')

    const tabs = ['General', 'Payments', 'Applications', 'Others']

    const faqs = [
        {
            question: "I don't see the rental option in the product section after installation?",
            answer: "",
        },
        {
            question: "How can I set up appointment booking like the demo?",
            answer: "To set up appointment booking similar to the demo, begin by choosing a reliable appointment booking platform that aligns with your needs. Customize the platform to reflect your brand's identity and integrate it seamlessly into your website. Configure available time slots, services, and any necessary payment options to streamline the booking process.",
        },
        {
            question: "How instance payment works with deposit?",
            answer: "",
        },
        {
            question: "Can I add multi currency on turbo theme?",
            answer: "",
        },
    ]

    return (
        <section className="bg-[url('/assets/banners/banner-2.jpg')] bg-cover bg-center relative mb-20">
            <div className='w-full h-full inset-0 bg-black/80 absolute'></div>

            <section className="container text-white sm:py-16 py-12 relative z-20">
                <div className="text-center pt-0 pb-8">
                    <h2 className="text-4xl font-bold mb-2">Frequently Asked Questions</h2>
                    <p className="text-lg">Looking to Save More on Your rental car?</p>
                </div>
                <div className="space-y-6">
                    <div className="flex justify-center gap-2 mb-6 flex-wrap">
                        {tabs.map((tab) => (
                            <Button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={cn(
                                    `rounded-full sm:px-8 sm:py-6 text-white bg-transparent border-2 border-secondary grow sm:grow-0`,
                                    activeTab === tab && 'bg-secondary hover:bg-secondary',
                                )}
                            >
                                {tab}
                            </Button>
                        ))}
                    </div>
                    <Accordion type="single" collapsible className="sm:w-3/4 mx-auto">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/20">
                                <AccordionTrigger className="text-left hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent>
                                    {faq.answer || "No answer provided."}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </section>
    )
}