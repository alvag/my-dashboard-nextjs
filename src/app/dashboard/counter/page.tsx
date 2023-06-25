import { FC } from 'react';
import { CartCounter } from '@/shopping-cart';

export const metadata = {
    title: 'Counter',
    description: 'Counter page',
}

interface CounterProps {
}

const CounterPage: FC<CounterProps> = ( {} ) => {

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span>Productos en el carrito de compras</span>

            <CartCounter value={ 15 }/>
        </div>
    );
};

export default CounterPage;
