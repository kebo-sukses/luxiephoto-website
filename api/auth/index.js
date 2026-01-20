export default function handler(req, res) {
  const clientId = process.env.OAUTH_CLIENT_ID;
  const redirectUri = `${process.env.SITE_URL || 'https://luxiephoto.com'}/api/auth/callback`;
  
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user&redirect_uri=${encodeURIComponent(redirectUri)}`;
  
  res.redirect(authUrl);
}
