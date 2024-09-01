import Image from 'next/image'
import React from 'react'

type Props = {}

const documents = [
    {
        for: 'For UAE Residents',
        image: '/assets/uae-residents.png',
        documentList: [
            'UAE Driving License',
            'Emirates ID',
            '(Residential Visa may be acceptable)'
        ]
    },
    {
        for: 'For GCC Residents',
        image: '/assets/gcc.png',
        documentList: [
            'GCC Driving License',
            'GCC ID',
            '(Residential Visa may be acceptable)'
        ]
    },
    {
        for: 'For Tourists visiting the UAE',
        image: '/assets/tourist.png',
        documentList: [
            'Passport',
            'Visit Visa',
            'Home Country Driving License',
            'International Driving Permit (IDP)'
        ]
    },
]

export default function RequiredDocumentsSection({ }: Props) {
    return (
        <section className='bg-white pb-20'>
            <section className='container'>
                <header>
                    <h2 className='section-title !text-left'><span className='text-primary'>Required Documents</span> For your Car Rental</h2>
                    <p className='text-muted-foreground'>
                        If you're planning a vacation in the United Arab Emirates (UAE), it's important to note that the country's major attractions are spread out across various locations.
                        The most convenient way to explore these sites—from iconic shopping destinations like the Mall of the Emirates to renowned landmarks like the Sheikh Zayed Grand Mosque in Abu Dhabi,
                        and luxury hotels and resorts in Ras Al Khaimah—is by car. As long as you have the necessary valid documents, you can easily rent a car anywhere in the UAE.
                    </p>
                </header>

                <section className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-8'>
                    {
                        documents.map((item, ind) => (
                            <div className='border border-border p-4 rounded-md' key={ind}>
                                <h3 className='font-medium text-lg text-gray-800 mb-2'>{item.for}</h3>
                                <hr />

                                <picture className='my-4 block'>
                                    <Image
                                        src={item.image}
                                        alt='thumbnail'
                                        width={400}
                                        height={300}
                                        objectFit='contain'
                                        className='rounded-md'
                                    />
                                </picture>

                                <ul className='flex flex-col gap-1'>
                                    {
                                        item.documentList.map((item, ind) => (
                                            <li key={ind}>✔ {item}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </section>

            </section>
        </section>
    )
}