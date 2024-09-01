import React from 'react'
import { adventureLists } from "../adventures/data";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

type Props = {}

export default function AdventureSummarySection({ }: Props) {
    return (
        <div className="container my-10">
            <section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4'>
                {adventureLists.map((item) => (
                    <Item key={item.title} item={item} />
                ))}
            </section>
        </div>
    )
}

type TItem = {
    item: (typeof adventureLists)[number];
};


const Item = ({ item }: TItem) => {
    return (
        <Link
            href={'/'}
            key={item.title}
            className=" bg-white rounded-3xl relative h-[80px] overflow-hidden group grid place-items-center"
        >
            <h3 className="text-2xl font-bold relative z-[50] text-white">{item.title}</h3>
            <Image
                src={item.image}
                alt={item.title}
                height={200}
                width={200}
                className="h-full w-full object-cover absolute inset-0 group-hover:scale-125 zen__transition__300"
            />
            <div className="absolute inset-0 h-full w-full bg-black/70"></div>
        </Link>
    );
};