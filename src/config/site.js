export function constructMetadata({
  title = "AI Shop lab ",
  description = "Boost your online presence with our expert web and application development services. From e-commerce to custom content management, we craft tailored digital solutions for businesses of all sizes. Let's turn your ideas into reality!",
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
    metadataBase: new URL("https://aishoplab.com/"),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
