import { Flex } from "@/once-ui/components";
import MasonryGrid from "@/components/blog/MasonryGrid";
import { baseURL } from "@/app/resources";
import { blog, person } from "@/app/resources/content";

export async function generateMetadata() {
  const title = blog.title;
  const description = blog.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/blog`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Gallery() {
  return (
    <Flex fillWidth>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: blog.title,
            description: blog.description,
            url: `https://${baseURL}/blog`,
            image: blog.images.map((image) => ({
              "@type": "ImageObject",
              url: `${baseURL}${image.src}`,
              description: image.alt,
            })),
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <MasonryGrid />
    </Flex>
  );
}
