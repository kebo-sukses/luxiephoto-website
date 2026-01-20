export default function handler(req, res) {
  const { code } = req.query;
  
  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;
  
  const tokenUrl = 'https://github.com/login/oauth/access_token';
  
  fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code: code
    })
  })
  .then(response => response.json())
  .then(data => {
    const content = `
      <script>
        const receiveMessage = (message) => {
          window.opener.postMessage(
            'authorization:github:success:${JSON.stringify(data)}',
            message.origin
          );
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      </script>
    `;
    res.status(200).send(content);
  })
  .catch(error => {
    res.status(500).json({ error: error.message });
  });
}
