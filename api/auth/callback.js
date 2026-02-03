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
<body style="font-family: -apple-system, sans-serif; text-align: center; padding: 50px;">
<h1 style="color: #dc2626;">Authorization Failed</h1>
<p>Error: ${data.error}</p>
<p>${data.error_description || ''}</p>
<p><a href="/admin/">Back to CMS</a></p>
</body>
</html>`;
      res.setHeader('Content-Type', 'text/html');
      return res.status(400).send(errorHtml);
    }
    
    const token = data.access_token;
    
    // HTML response that properly communicates with Decap CMS
    const content = `<!DOCTYPE html>
<html>
<head>
  <title>Authorization Complete</title>
  <style>
    body { font-family: -apple-system, sans-serif; text-align: center; padding: 50px; background: #f9fafb; }
    .container { background: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); max-width: 400px; margin: 0 auto; }
    .success { color: #388f6b; }
    .status { color: #6b7280; margin-top: 10px; }
  </style>
</head>
<body>
<div class="container">
  <h1 class="success">✓ Authorized!</h1>
  <p class="status" id="status">Completing login...</p>
</div>
<script>
(function() {
  const token = '${token}';
  
  function sendToOpener() {
    // Format yang diharapkan Decap CMS
    const message = JSON.stringify({
      token: token,
      provider: 'github'
    });
    
    if (window.opener) {
      // Kirim dalam format yang benar untuk Decap CMS
      window.opener.postMessage(
        'authorization:github:success:' + message,
        '*'
      );
      
      document.getElementById('status').textContent = 'Login successful! Closing...';
      
      // Close popup after short delay
      setTimeout(function() {
        window.close();
      }, 1000);
      
      // Fallback redirect if close fails
      setTimeout(function() {
        window.location.href = '/admin/';
      }, 2000);
    } else {
      document.getElementById('status').textContent = 'Redirecting to admin...';
      window.location.href = '/admin/';
    }
  }
  
  // Execute immediately
  sendToOpener();
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
