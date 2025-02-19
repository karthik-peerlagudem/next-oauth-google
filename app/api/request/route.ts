import { NextResponse } from 'next/server';

import { config } from 'dotenv';
import { OAuth2Client } from 'google-auth-library';

config({ path: '.env' });

export async function POST() {
    try {
        const redirectUrl = process.env.RE_DIRECT_URI;
        console.log(`API Request: redirect url - ${redirectUrl}`);

        const oAuth2Client = new OAuth2Client(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            redirectUrl
        );

        const authorizeUrl = oAuth2Client.generateAuthUrl({
            scope: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'openid',
            ].join(' '),
            prompt: 'consent',
        });

        console.log(`API Request: authorize url - ${authorizeUrl}`);

        return NextResponse.json(
            { url: authorizeUrl },
            {
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Referer-Policy': 'no-referrer-when-downgrade',
                },
            }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
