<script>
    import {RenderCode} from '$lib';
</script>

<main class="space-y-4">
	<title>Backend Integration</title>
	<h1>Backend Integration</h1>
    <h2>GET method</h2>
    <h3>When file picker mounts, it loads files using <code>$fileInputStore.serverGetUrl</code> endpoint.</h3>
    <RenderCode
        lang="javascript"
        code={
            `
            const params = new URLSearchParams({
                isLoggedIn: String($isLoggedIn),
                userId: $User.userId
            });
            const res = await fetch(\`\${$fileInputStore.serverGetUrl}?\${params.toString()}\`);
            const data = await res.json();
            if (!res.ok) {
                setToastMessage("error", data || "Failed to fetch media.");
                return;
            }`
        }/>
    <h3>Responses are expected in the following format:</h3>
    <RenderCode
		lang="json"
		code={`
            {
                "Audio": [
                    {
                    "id": "123e4567-e89b-12d3-a456-426614174000",
                    "url": "https://example.com"
                    "original_name": "string",
                    }
                ],
                "Documents": [],
                "Images": [],
                "Videos": []
            }
	`}/>
    <h2>POST method</h2>
    <h3>The <code>$fileInputStore.serverUploadUrl endpoint</code> is used to upload files to your cloud. If any error occurs or specific files fail to upload, the error will be displayed using toasts.</h3>
    <RenderCode
		lang="javascript"
		code={`
		    $fileInputStore.selectedFiles.forEach(file => formData.append('files', file));
            formData.append('r2_key', $fileInputStore.r2_key);
            formData.append('is_loggedin', $isLoggedIn.toString());
            formData.append('userid', $User.userId);

            //POST body to $fileInputStore.serverUploadUrl
            const data = await res.json();
            if (!res.ok) {
                setToastMessage('error', data || 'Upload failed' );
                return;
            }
            data.forEach((item: { code: number; original_name: string }) => {
                if (item.code === 500) {
                    setToastMessage('error', \`Failed to upload file: \${item.original_name} (code: \${item.code})\`);
                }
            });
	`}/>
    <h2>DELETE method</h2>
    <h3>When a user selects files and $fileInputStore.manage is true, a delete button appears allowing them to remove files from the cloud via the <code>$fileInputStore.serverDeleteUrl</code> endpoint.</h3>
    <RenderCode
        lang="javascript"
        code={
            `
        const store = get(fileInputStore);
        const idsToDelete = store.submissions.map(item => item.id);
        try {
            //DELETE body: id's to $fileInputStore.serverDeleteUrl
            const data = await response.json();
            if (!response.ok) {
                setToastMessage('error', data || 'Failed to delete files.');
                return;
            }
            data.forEach((item: { id: string; status: string; code: number }) => {
                if (item.code === 404) {
                    setToastMessage('error', \`Failed to delete file with ID: \${item.id} - \${item.status}\`);
                }
            });
        `
        }/>
    <h1>Example Integration</h1>
    <RenderCode
        lang="js"
        code={`
            // src/routes/api/media/upload/+server.js
            import {
                BACKEND_URL,
                CLOUDFLARE_R2_BUCKET,
                CLOUDFLARE_R2_PUBLIC_URL
            } from '$env/static/private';

            export async function POST({ request }) {
                try {
                    const incomingForm = await request.formData();

                    const r2_key = incomingForm.get('r2_key');
                    const is_loggedin = incomingForm.get('is_loggedin') === 'true';
                    const userId = incomingForm.get('userid');
                    const files = incomingForm.getAll('files');

                    const backendForm = new FormData();
                    backendForm.append('bucket', CLOUDFLARE_R2_BUCKET);
                    backendForm.append('bucket_url', CLOUDFLARE_R2_PUBLIC_URL);
                    backendForm.append('r2_key', r2_key);

                    if (is_loggedin) {
                        backendForm.append('user_id', userId);
                    } else {
                        backendForm.append('anonymous_id', userId);
                    }
                    for (const file of files) {
                        backendForm.append('files', file);
                    }

                    const uploadUrl = \`\${BACKEND_URL}media/upload\`;
                    const response = await fetch(uploadUrl, {
                        method: 'POST',
                        body: backendForm
                    });

                    if (!response.ok) {
                        const message = await response.text();
                        return new Response(JSON.stringify(message), {
                            status: response.status
                        });
                    } else {
                        const data = await response.json();
                        return new Response(JSON.stringify(data), {
                            status: 200,
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                    }
                } catch (err) {
                    return new Response(
                        JSON.stringify('Internal server error'),
                        { status: 500 }
                    );
                }
            }

        `}/>
</main>