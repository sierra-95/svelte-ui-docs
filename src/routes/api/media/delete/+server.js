import { BACKEND_URL, CLOUDFLARE_R2_BUCKET } from '$env/static/private';

export async function DELETE({ request }) {
    try {
        const body = await request.json();
        const { id } = body;

        if (!id || !Array.isArray(id) || id.length === 0) {
            return new Response(
                JSON.stringify({ message: 'id array is required' }),
                { status: 400 }
            );
        }

        const deleteUrl = `${BACKEND_URL}media/delete`;

        //console.log('Deleting media with IDs:', id, 'from bucket:', CLOUDFLARE_R2_BUCKET, 'using URL:', deleteUrl);

        const response = await fetch(deleteUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                bucket: CLOUDFLARE_R2_BUCKET,
                id
            })
        });


        if (!response.ok) {
            const message = await response.text();
            return new Response(JSON.stringify(message), {
                status: response.status
            });
        }else{
            const data = await response.json();
            //console.log('Backend Successfully deleted media:', data);
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
