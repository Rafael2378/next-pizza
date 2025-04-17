import React from 'react';
import { Logo } from './logo';
import { Search } from './search';
import { Container } from './ui/container';
import { Button } from './ui/button';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';


interface Props {
    className?: string;
}

export const Header: React.FC<Props> = (props) => {
    const { className } = props;
    return (
        <header className={className}>
            <Container className='flex gap-5 items-center justify-between '>
                <Logo />
                <Search className='flex-1' />
                <div className='flex gap-3'>
                    <Button variant = "outline">
                        <User/>
                    Профиль
                    </Button>
                    <Button className='gap-2 group'>
                        <span>520Р</span>
                        <span className='w-[1px] h-[20px] bg-white'></span>
                        <span className='flex gap-2 relative'>
                            <span className='flex items-center gap-1 group-hover:opacity-0 transition-all'><ShoppingCart/>3</span>
                            <ArrowRight className='absolute left-0 opacity-0 transition-all translate-x-[-50%] group-hover:opacity-100 group-hover:left-[50%]'/>
                        </span>
                    </Button>
                </div>
            </Container>
        </header>
    );
}