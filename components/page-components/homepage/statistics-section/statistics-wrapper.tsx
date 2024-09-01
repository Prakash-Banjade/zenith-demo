import { Card, CardContent } from "@/components/ui/card"

export default function StatisticsSection() {
    return (
        <div className="container mx-auto px-4 py-8 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { number: "7+", title: "Years", description: "In the rental market, premium cars redefine luxury travel experiences" },
                    { number: "72+", title: "Cars", description: "Premium cars redefine luxury travel with unmatched style and sophistication" },
                    { number: "800+", title: "Clients", description: "Our clients have trusted us with their luxury car needs" }
                ].map((item, index) => (
                    <Card key={index} className="border-none shadow-none">
                        <CardContent className="p-6">
                            <div className="flex items-baseline mb-4 gap-3">
                                <span className="text-5xl font-bold text-secondary">
                                    {item.number}
                                </span>
                                <h2 className="text-4xl font-semibold text-gray-800">{item.title}</h2>
                            </div>
                            <p className="text-gray-600">
                                {item.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}