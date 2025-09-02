'use client'

import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  image?: string
  structuredData?: object
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  canonical,
  image,
  structuredData
}: SEOHeadProps) {
  const defaultTitle = "SEOTING - İstanbul'un Önde Gelen Dijital Pazarlama Ajansı"
  const defaultDescription = "SEO, SEM, sosyal medya yönetimi, ürün fotoğrafçılığı ve marka danışmanlığı hizmetleri. 5+ yıl deneyim, 150+ mutlu müşteri. Projenizi başlatın!"
  
  const finalTitle = title ? `${title} | SEOTING` : defaultTitle
  const finalDescription = description || defaultDescription
  const finalImage = image || '/favicon.svg'
  const finalCanonical = canonical || 'https://seoting.com'

  return (
    <Head>
      {/* Core Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:site_name" content="SEOTING" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:creator" content="@seoting" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
      <meta name="author" content="SEOTING Dijital Pazarlama" />
      <meta name="revisit-after" content="1 days" />
      <meta name="language" content="Turkish" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </Head>
  )
}
