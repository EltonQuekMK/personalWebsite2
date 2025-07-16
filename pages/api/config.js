import { getServerConfig } from '../../lib/config';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const config = getServerConfig();
    
    // Only send public configuration data
    const publicConfig = {
      analytics: {
        enabled: config.analytics?.googleAnalytics?.enabled || false,
        trackingId: config.analytics?.googleAnalytics?.trackingId || ''
      }
    };

    res.status(200).json(publicConfig);
  } catch (error) {
    console.error('Error loading config:', error);
    res.status(500).json({ 
      analytics: { 
        enabled: false, 
        trackingId: '' 
      } 
    });
  }
}
