import {BACKEND_URL} from '$env/static/private';

export async function GET({ url, fetch }) {
    try {
        const isLoggedIn = url.searchParams.get('isLoggedIn') === 'true';
        const userId = url.searchParams.get('userId');

        //console.log("Params - isLoggedIn:", isLoggedIn, "userId:", userId);

        if (!userId) {
            return new Response(
                JSON.stringify({ message: 'userId is required' }),
                { status: 400 }
            );
        }

        const queryParams = new URLSearchParams();

        if (isLoggedIn) {
            queryParams.set('user_id', userId);
        } else {
            queryParams.set('anonymous_id', userId);
        }

        const backendUrl = `${BACKEND_URL}media/get?${queryParams.toString()}`;

        //console.log("Endpoint URL:", backendUrl);

        const response = await fetch(backendUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        

        if (!response.ok) {
            const message = await response.text();
            return new Response(JSON.stringify(message), {
                status: response.status
            });
        }else{
            const data = await response.json();
            return new Response(JSON.stringify(data), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

    } catch (error) {
        return new Response(
            JSON.stringify({
                message: 'Internal server error',
                error: String(error)
            }),
            { status: 500 }
        );
    }
}
