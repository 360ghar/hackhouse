import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  ogType?: string;
  jsonLd?: object | object[];
  keywords?: string;
}

const SITE = "https://hackhouse.in";

const SEO = ({
  title,
  description,
  canonical,
  noindex = false,
  ogType = "website",
  jsonLd,
  keywords,
}: SEOProps) => {
  const url = canonical ? `${SITE}${canonical}` : undefined;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        canonical && <link rel="canonical" href={url} />
      )}
      <meta property="og:type" content={ogType} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="HackHouse Gurgaon" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content={`${SITE}/og-image.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="HackHouse Gurgaon — Startup Residency for Founders & Builders" />
      <meta name="twitter:card" content="summary_large_image" />
      {url && <meta name="twitter:url" content={url} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE}/og-image.png`} />
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
