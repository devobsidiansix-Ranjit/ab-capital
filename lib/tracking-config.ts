// Tracking configuration for analytics and conversion tracking
export const trackingConfig = {
  // Google Tag Manager
  gtm: {
    id: 'GTM-54DQNPT5'
  },
  
  // Google Ads
  googleAds: {
    conversionId: 'AW-11272677516',
    conversionLabel: 'your-conversion-label' // Replace with your actual conversion label
  },
  
  // Google Analytics
  googleAnalytics: {
    measurementId: 'G-XXXXXXXXXX' // Replace with your GA4 measurement ID if you have one
  },
  
  // Facebook Pixel
  facebook: {
    pixelId: 'your-facebook-pixel-id' // Replace with your Facebook Pixel ID if you have one
  },
  
  // LinkedIn Insight Tag
  linkedIn: {
    conversionId: 'your-linkedin-conversion-id' // Replace with your LinkedIn conversion ID if you have one
  },
  
  // Conversion tracking
  conversion: {
    currency: 'AED',
    defaultValue: 100
  }
}

// Service-specific conversion values
export const getConversionValue = (service: string): number => {
  const conversionValues: Record<string, number> = {
    'Business Setup': 500,
    'Business Advices': 200,
    'Financial Forecast and Projections': 300,
    'Dubai Customs Registration': 150,
    'Tax Residency Certificate': 250
  }
  
  return conversionValues[service] || trackingConfig.conversion.defaultValue
}

// Service categories for analytics
export const getServiceCategory = (service: string): string => {
  const categories: Record<string, string> = {
    'Business Setup': 'Business Formation',
    'Business Advices': 'Consulting',
    'Financial Forecast and Projections': 'Financial Services',
    'Dubai Customs Registration': 'Government Services',
    'Tax Residency Certificate': 'Tax Services'
  }
  
  return categories[service] || 'General Services'
}
