import { NextRequest, NextResponse } from 'next/server';

import { config } from 'dotenv';
import { OAuth2Client } from 'google-auth-library';

config({ path: '.env' });

async function getUserData(access_token: string) {
    try {
        const response = await fetch(
            'https://www.googleapis.com/oauth2/v3/userinfo',
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    Accept: 'application/json',
                },
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data) {
            throw new Error('No data received from Google');
        }

        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw new Error('Failed to fetch user data from Google');
    }
}

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        const code = searchParams.get('code');
        if (!code) {
            return NextResponse.json(
                { error: 'Code not found' },
                { status: 400 }
            );
        }

        const redirectUrl = process.env.RE_DIRECT_URI;

        const oAuth2Client = new OAuth2Client(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            redirectUrl
        );

        const res = await oAuth2Client.getToken(code);
        await oAuth2Client.setCredentials(res.tokens);

        // Get user data
        const userData = await getUserData(res.tokens.access_token!);

        // Create a session object with necessary user info
        const session = {
            accessToken: res.tokens.access_token,
            userId: userData.sub,
            email: userData.email,
            name: userData.name,
            picture: userData.picture,
        };

        const homepageUrl = process.env.HOMEPAGE || '';

        // Create the response
        const response = NextResponse.redirect(homepageUrl, {
            status: 302,
        });
        // Set session cookie with user daxta
        response.cookies.set('session', JSON.stringify(session), {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24, // 24 hours
            path: '/',
        });

        return response;
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
