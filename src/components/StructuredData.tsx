'use client'

interface OrganizationSchemaProps {
  type?: 'organization' | 'service' | 'localbusiness' | 'article'
  pageData?: {
    title?: string
    description?: string
    url?: string
    image?: string
  }
}

export default function StructuredData({ type = 'organization', pageData }: OrganizationSchemaProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SEOTING - Dijital Pazarlama Ajansı",
    "alternateName": "SEOTING",
    "url": "https://seoting.com",
    "logo": "https://seoting.com/favicon.svg",
    "description": "İstanbul merkezli SEOTING, dijital pazarlama ve ürün çekim hizmetleri sunan önde gelen ajansıdır. Türkiye'nin en büyük firmalarına danışmanlık hizmeti veriyoruz.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Maslak Mahallesi, Büyükdere Cad. No:123",
      "addressLocality": "Şişli",
      "addressRegion": "İstanbul",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-544-251-90-82",
      "contactType": "customer service",
      "availableLanguage": ["Turkish", "English"]
    },
    "sameAs": [
      "https://instagram.com/seoting",
      "https://linkedin.com/company/seoting",
      "https://twitter.com/seoting"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Turkey"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "41.0082",
        "longitude": "28.9784"
      },
      "geoRadius": "50000"
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SEOTING Dijital Pazarlama Ajansı",
    "image": "https://seoting.com/favicon.svg",
    "description": "İstanbul'un önde gelen dijital pazarlama ajansı. SEO, SEM, sosyal medya, ürün fotoğrafçılığı ve marka danışmanlığı hizmetleri.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Maslak Mahallesi, Büyükdere Cad. No:123",
      "addressLocality": "Şişli",
      "addressRegion": "İstanbul",
      "postalCode": "34398",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.0082",
      "longitude": "28.9784"
    },
    "telephone": "+90-544-251-90-82",
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 10:00-16:00"
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": pageData?.title || "Dijital Pazarlama Hizmetleri",
    "description": pageData?.description || "Profesyonel dijital pazarlama, SEO, sosyal medya yönetimi ve ürün fotoğrafçılığı hizmetleri",
    "provider": {
      "@type": "Organization",
      "name": "SEOTING",
      "url": "https://seoting.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Turkey"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dijital Pazarlama Hizmetleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Hizmetleri",
            "description": "Arama motoru optimizasyonu ve organik trafik artırma"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Google Ads Yönetimi",
            "description": "Profesyonel Google Ads kampanya yönetimi"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Sosyal Medya Yönetimi",
            "description": "Instagram, Facebook, LinkedIn sosyal medya yönetimi"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ürün Fotoğrafçılığı",
            "description": "Profesyonel e-ticaret ürün çekimi ve görsel tasarım"
          }
        }
      ]
    }
  }

  const articleSchema = pageData ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": pageData.title,
    "description": pageData.description,
    "url": pageData.url,
    "image": pageData.image || "https://seoting.com/favicon.svg",
    "author": {
      "@type": "Organization",
      "name": "SEOTING",
      "url": "https://seoting.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SEOTING",
      "logo": {
        "@type": "ImageObject",
        "url": "https://seoting.com/favicon.svg"
      }
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString()
  } : null

  const getSchema = () => {
    switch (type) {
      case 'localbusiness':
        return localBusinessSchema
      case 'service':
        return serviceSchema
      case 'article':
        return articleSchema
      default:
        return organizationSchema
    }
  }

  const schema = getSchema()
  if (!schema) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  )
}
