addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)

  if (url.pathname === '/data-deletion') {
    if (request.method === 'GET') {
      const challenge = url.searchParams.get('hub.challenge') || ''
      return new Response(challenge, {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      })
    }

    if (request.method === 'POST') {
      const { signed_request } = await request.json()
      console.log('Suppression demandée pour signed_request:', signed_request)
      return new Response(null, { status: 200 })
    }
  }

  if (url.pathname === '/confirm' && request.method === 'GET') {
    return new Response(`
      <!DOCTYPE html>
      <html lang="fr">
      <head><meta charset="utf-8"><title>Suppression confirmée</title></head>
      <body>
        <h1>Vos données ont été supprimées</h1>
        <p>Contactez-nous à support@ba7ath.tn</p>
      </body>
      </html>
    `, {
      status: 200,
      headers: { 'Content-Type': 'text/html' }
    })
  }

  return new Response('Not Found', { status: 404 })
}
