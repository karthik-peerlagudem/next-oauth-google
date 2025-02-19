import Link from 'next/link';

export const HeaderLogo = () => {
    return (
        <Link href="/">
            <div className="items-center hidden lg:flex">
                <h1 className="font-bold text-2xl text-white">Google Oauth</h1>
            </div>
        </Link>
    );
};
