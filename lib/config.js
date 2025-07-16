// Server-side config loader - only works in Node.js environment
let config = null;

export function getServerConfig() {
  if (typeof window !== 'undefined') {
    // Client-side fallback
    return {
      analytics: {
        googleAnalytics: {
          enabled: false,
          trackingId: ''
        }
      },
      contact: {
        email: 'contact@example.com'
      },
      social: {
        linkedin: '',
        github: ''
      }
    };
  }

  if (config) return config;
  
  try {
    const fs = require('fs');
    const path = require('path');
    const configPath = path.join(process.cwd(), 'config', 'config.json');
    const configFile = fs.readFileSync(configPath, 'utf8');
    config = JSON.parse(configFile);
    return config;
  } catch (error) {
    console.warn('Config file not found, using default values');
    return {
      analytics: {
        googleAnalytics: {
          enabled: false,
          trackingId: ''
        }
      },
      contact: {
        email: 'contact@example.com'
      },
      social: {
        linkedin: '',
        github: ''
      }
    };
  }
}

export function getGATrackingId() {
  const config = getServerConfig();
  return config.analytics?.googleAnalytics?.trackingId || '';
}

export function isGAEnabled() {
  const config = getServerConfig();
  return config.analytics?.googleAnalytics?.enabled || false;
}
