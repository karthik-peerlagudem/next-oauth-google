import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { LogoutButton } from '@/components/logout';

interface SessionData {
    name: string;
    email: string;
    picture: string;
}

export default async function HomePage() {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session');
    const userData: SessionData = sessionCookie
        ? JSON.parse(sessionCookie.value)
        : null;

    if (!userData) {
        redirect('/signin');
    }

    return (
        <div className="flex  flex-col items-center justify-center min-h-screen gap-2">
            <h1 className="font-semibold text-4xl text-center">
                {`Welcome Back! ${userData.name}`}
            </h1>
            <LogoutButton />
        </div>
    );
}
