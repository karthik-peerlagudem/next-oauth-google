import { HeaderLogo } from '@/components/header-logo';
import { Navigation } from '@/components/navigation';

export const Header = () => {
    return (
        <header className="bg-[#161515] px-4 py-4">
            <div className="max-w-screen-2xl mx-auto">
                <div className="w-full flex items-center justify-between mb-6">
                    <div className="flex items-center lg:gap-x-16">
                        <HeaderLogo />
                        <Navigation />
                    </div>
                </div>
            </div>
        </header>
    );
};
