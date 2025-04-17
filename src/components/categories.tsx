import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface Props {
    className?: string;
}
const categories = ["Все", "Мясные", "Сладкие", "Вегетарианские", "С курицей"]


export const Categories: React.FC<Props> = (props) => {
    const { className } = props;
    return (
        <>
            <ul className={cn("p-2 bg-gray-100 rounded-2xl flex gap-2 items-center", className)}>
                {categories.map(item => (
                    <li key={item}>
                        <Link className={cn('px-3 py-2 rounded-2xl', "Все" === item && 'bg-white')} key={item} href={`#${item}`}>{item}</Link>
                    </li>
                ))}
                <li >
                    <button className='px-3 py-1 rounded-2xl flex gap-2 items-center'>Ещё <ArrowDown size={14} /></button>
                </li>
            </ul>
        </>
    );
}