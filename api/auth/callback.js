export default async function handler(req, res) {
  const { code } = req.query;
  
  if (!code) {
    return res.status(400).json({ error: 'Missing code parameter' });
  }
  
  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;
  
  if (!clientId || !clientSecret) {
    return res.status(500).json({ error: 'OAuth credentials not configured' });
  }
  
  try {
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
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
    });
    
    const data = await tokenResponse.json();
    
    if (data.error) {
      const errorHtml = `<!DOCTYPE html>
<html>
<head><title>Authorization Failed</title></head>
<body>
<h1>Authorization Failed</h1>
<p>Error: ${data.error}</p>
<p>${data.error_description || ''}</p>
<p><a href="/admin/">Back to CMS</a></p>
</body>
</html>`;
      res.setHeader('Content-Type', 'text/html');
      return res.status(400).send(errorHtml);
    }
    
    const token = data.access_token;
    
    // Return HTML that communicates with Decap CMS opener window
    const content = `<!DOCTYPE html>
<html>
<head>
  <title>Authorization Complete</title>
  <style>
    body { font-family: -apple-system, sans-serif; text-align: center; padding: 50px; }
    .success { color: #388f6b; }
  </style>
</head>
<body>
<h1 class="success">✓ Authorization Complete</h1>
<p>This window should close automatically...</p>
<script>
(function() {
  const token = "${token}";
  const provider = "github";
  
  // Try to communicate with opener window
  if (window.opener) {
    function receiveMessage(e) {
      console.log("Received message from:", e.origin);
      window.opener.postMessage(
        'authorization:' + provider + ':success:{"token":"' + token + '","provider":"' + provider + '"}',
        e.origin
      );
      window.removeEventListener("message", receiveMessage, false);
      setTimeout(function() { window.close(); }, 1000);
    }
    window.addEventListener("message", receiveMessage, false);
    window.opener.postMessage("authorizing:" + provider, "*");
  } else {
    // No opener - store token and redirect
    try {
      localStorage.setItem('netlify-cms-user', JSON.stringify({
        token: token,
        provider: provider
      }));
    } catch(e) {
      console.log("Could not store token in localStorage");
    }
    document.body.innerHTML = '<h1 class="success">✓ Authorized!</h1><p>Redirecting to CMS...</p>';
    setTimeout(function() {
      window.location.href = '/admin/';
    }, 1500);
  }
})();
</script>
</body>
</html>`;
    
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(content);
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
