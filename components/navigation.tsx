'use client';

import { usePathname } from 'next/navigation';

import { NavButton } from '@/components/nav-button';

const routes = [
    {
        href: '/',
        label: 'Home',
    },
    {
        href: '/settings',
        label: 'Settings',
    },
];

export const Navigation = () => {
    const pathname = usePathname();

    return (
        <nav className="hidden lg:flex items-center gap-x-4 overflow-auto text-white">
            {routes.map((route) => (
                <NavButton
                    key={route.href}
                    href={route.href}
                    label={route.label}
                    isActive={pathname === route.href}
                />
            ))}
        </nav>
    );
};
