import React from 'react'

type Props = {}

export default function ServicesHoverCard({ }: Props) {
    return (
        <>
            <span className='text-muted-foreground font-medium px-2'>Car Rental Services in Dubai</span>
            <hr className='py-1' />
            <ul className='flex flex-col gap-1 text-sm'>
                <li className='text-gray-800 px-2 py-1 hover:bg-slate-200 rounded-md transition-all' role='button'>Chauffeur Service</li>
                <li className='text-gray-800 px-2 py-1 hover:bg-slate-200 rounded-md transition-all' role='button'>Cheap Car for Rent</li>
                <li className='text-gray-800 px-2 py-1 hover:bg-slate-200 rounded-md transition-all' role='button'>7 Seater Car Rental</li>
                <li className='text-gray-800 px-2 py-1 hover:bg-slate-200 rounded-md transition-all' role='button'>Dubai Airport Terminal 1</li>
                <li className='text-gray-800 px-2 py-1 hover:bg-slate-200 rounded-md transition-all' role='button'>Dubai Airport Terminal 3</li>
                <li className='text-gray-800 px-2 py-1 hover:bg-slate-200 rounded-md transition-all' role='button'>Al Maktoum Int Airport</li>
                <li className='text-gray-800 px-2 py-1 hover:bg-slate-200 rounded-md transition-all' role='button'>Monthly Car Rental</li>
            </ul>
        </>
    )
}