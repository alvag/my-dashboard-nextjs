import { FC } from 'react';
import { WidgetsGrid } from '@/app/components';

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

            <WidgetsGrid/>
        </div>
    );
};

export default MainPage;
