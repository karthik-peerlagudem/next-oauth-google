'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        const response = await fetch('/api/logout', {
            method: 'POST',
        });

        if (response.ok) {
            router.push('/signin');
        }
    };

    return (
        <Button onClick={handleLogout} variant="default">
            Log out
        </Button>
    );
}
