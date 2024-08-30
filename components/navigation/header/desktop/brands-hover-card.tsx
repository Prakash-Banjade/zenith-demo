import { brandsList } from '@/components/page-components/homepage/brands-section/data'
import Image from 'next/image'
import React from 'react'

type Props = {}

export function BrandsHoverCard({ }: Props) {
    return (
        <section className='grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-4'>
            {
                brandsList.map((item, index) => (
                    <div key={index} className="bg-white border p-4 cursor-pointer rounded-xl group flex-col flex gap-2 w-full hover:drop-shadow-sm hover:shadow-md shadow-primary hover:bg-slate-50 zen__transition__300">
                        <div className="!min-h-[10px] flex items-center gap-2">
                            <Image
                                src={item.image}
                                alt={item.name}
                                height={50}
                                width={50}
                            />
                            <span className='font-medium'>{item.name}</span>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}