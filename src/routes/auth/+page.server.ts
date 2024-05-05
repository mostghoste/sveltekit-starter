import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
    default: async ({ request, cookies }) => {
        console.log("Processing login")
        const form = await request.formData();
        const token = form.get('token');
        console.log("Created token: " + token)
        if (!token || typeof token !== 'string') {
            console.log("Token invalid, redirecting to /auth")
            throw redirect(303, '/auth');
        }
        cookies.set('pb_auth', JSON.stringify({ token: token }), { path: '/'});
        console.log("Auth successful, redirecting to /")
        throw redirect(303, '/');
    }
} satisfies Actions;
