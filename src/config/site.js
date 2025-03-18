export function constructMetadata({
  title = "Ai Shop Lab",
  description = "AI Shop Lab is your ultimate Shopify assistant, using AI to optimize product listings, enhance SEO, and analyze market trends. Boost sales effortlessly with smart automation and competitor insights",
  image = "/agency.PNG",
  icons = "/favicon.ico",
  noIndex = false,
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@KING_IN_JUNGLE",
    },
    icons,
    metadataBase: new URL("https://aishoplab.com"),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
