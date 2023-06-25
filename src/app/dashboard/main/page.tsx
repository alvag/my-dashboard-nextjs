import { FC } from 'react';
import { SimpleWidget } from '@/app/components';

interface MainProps {
}

export const metadata = {
    title: 'Admin Dashboard',
    description: 'SEO Title'
}

const MainPage: FC<MainProps> = ( {} ) => {
    return (
        <div className="text-black p-2">
            <h1 className="mt-2 text-3xl">Dashboard</h1>
            <span className="text-xl">Informacion general</span>

            <div className="flex flex-wrap p-2">
                <SimpleWidget/>
            </div>
        </div>
    );
};

export default MainPage;
