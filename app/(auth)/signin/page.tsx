'use client';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';

export const SignInPage = () => {
    const handleLogin = async () => {
        const response = await fetch('/api/request', {
            method: 'POST',
        });

        const data = await response.json();
        redirect(data.url);
    };

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            <div className="h-full lg:flex flex-col items-center justify-center px-4">
                <div className="text-center space-y-4 pt-16">
                    <h1 className="font-bold text-3xl text-[#2E2A47]">
                        Welcome Back!
                    </h1>
                    <p className="text-base text-[#7E8CA0]">
                        Log in to your account
                    </p>
                    <div className="flex flex-col items-center justify-center">
                        <Button onClick={handleLogin}>Login with Google</Button>
                    </div>
                </div>
            </div>
            <div className="h-full hidden lg:flex items-center justify-center bg-black">
                <h1 className="font-bold text-4xl text-white">Google Oauth</h1>
            </div>
        </div>
    );
};

export default SignInPage;
