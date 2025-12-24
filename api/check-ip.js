export default function handler(req, res) {
  // List your allowed IPs here
  const allowedIPs = [
    '119.159.172.227',
  ];

  // Get the user's IP address from the request
  const userIP = req.headers['x-forwarded-for'] || 
                 req.headers['x-real-ip'] || 
                 req.connection.remoteAddress;

  // Check if the IP is allowed
  if (allowedIPs.includes(userIP)) {
    res.status(200).json({ 
      allowed: true, 
      message: 'Access granted' 
    });
  } else {
    res.status(403).json({ 
      allowed: false, 
      message: 'Access denied from this IP address.' 
    });
  }
}
