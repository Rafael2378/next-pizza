import React from 'react';
import { Container } from './ui/container';
import { ArrowUpDown, Cat } from 'lucide-react';
import { Categories } from './categories';
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from './ui/select';

interface Props {
    className?: string;
}

export const TopBar: React.FC<Props> = (props) => {
    const { className } = props;
    return (
        <div className={className}>
            <Container className='flex items-center justify-between'>
                <Categories />
                <Select defaultValue={'popular'}>
                    <SelectTrigger className='flex items-center gap-2'>
                        <ArrowUpDown size={16} />
                        <span className='text-black font-bold'>Сортировка:</span>
                        <span className='text-primary font-bold'>
                            <SelectValue/>
                        </span>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value={'popular'}>рейтингу</SelectItem>
                        <SelectItem value={'price'}>Цена</SelectItem>
                    </SelectContent>
                </Select>
            </Container>
        </div>
    );
}