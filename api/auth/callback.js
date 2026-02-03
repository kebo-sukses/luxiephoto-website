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
    
    const content = `<!DOCTYPE html>
<html>
<head>
  <title>Authorizing...</title>
  <style>
    body { font-family: -apple-system, sans-serif; text-align: center; padding: 50px; background: #f9fafb; }
    .container { background: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); max-width: 400px; margin: 0 auto; }
    .success { color: #388f6b; }
    .loading { color: #6b7280; }
    a { color: #388f6b; }
  </style>
</head>
<body>
<div class="container">
  <h1 class="success" id="title">✓ Authorized!</h1>
  <p class="loading" id="status">Connecting to CMS...</p>
</div>
<script>
(function() {
  var token = "${token}";
  var provider = "github";
  var statusEl = document.getElementById('status');
  var titleEl = document.getElementById('title');
  var messageSent = false;
  var closed = false;
  
  function updateStatus(text) {
    if (statusEl) statusEl.textContent = text;
  }
  
  function closeWindow() {
    if (closed) return;
    closed = true;
    updateStatus('Closing...');
    setTimeout(function() {
      try { window.close(); } catch(e) {}
      // If window.close() fails, redirect
      setTimeout(function() {
        window.location.href = '/admin/';
      }, 500);
    }, 300);
  }
  
  function sendMessage(origin) {
    if (messageSent) return;
    messageSent = true;
    try {
      var message = 'authorization:' + provider + ':success:{"token":"' + token + '","provider":"' + provider + '"}';
      window.opener.postMessage(message, origin);
      updateStatus('Success! Closing...');
      setTimeout(closeWindow, 800);
    } catch(e) {
      console.error('postMessage failed:', e);
      fallbackRedirect();
    }
  }
  
  function fallbackRedirect() {
    updateStatus('Redirecting to CMS...');
    window.location.href = '/admin/';
  }
  
  // Check if we have an opener
  if (window.opener && !window.opener.closed) {
    updateStatus('Sending credentials...');
    
    // Listen for handshake from CMS
    window.addEventListener('message', function handler(e) {
      if (e.data === 'authorizing:github' || e.origin) {
        sendMessage(e.origin || '*');
      }
    }, false);
    
    // Send ready signal to opener
    try {
      window.opener.postMessage('authorizing:' + provider, '*');
    } catch(e) {
      console.error('Initial postMessage failed:', e);
    }
    
    // Also try sending directly after short delay (some CMS versions need this)
    setTimeout(function() {
      if (!messageSent) {
        try {
          var message = 'authorization:' + provider + ':success:{"token":"' + token + '","provider":"' + provider + '"}';
          window.opener.postMessage(message, '*');
          messageSent = true;
          updateStatus('Success! Closing...');
          setTimeout(closeWindow, 800);
        } catch(e) {
          console.error('Direct postMessage failed:', e);
          fallbackRedirect();
        }
      }
    }, 500);
    
    // Final fallback - redirect after timeout
    setTimeout(function() {
      if (!closed) {
        updateStatus('Taking too long, redirecting...');
        fallbackRedirect();
      }
    }, 5000);
    
  } else {
    // No opener window
    updateStatus('Redirecting to CMS...');
    setTimeout(fallbackRedirect, 1000);
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
