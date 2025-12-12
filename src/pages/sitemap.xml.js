import client from "@/sanityConfig";
import { GetAllPosts } from "@/lib/posts";

const SITE_URL = "https://www.digiexpo.ae";

function generateSiteMap({ staticUrls, sanityPosts, wpPosts }) {
  const urls = [];

  // Static URLs
  staticUrls.forEach((path) => {
    urls.push(`  <url>\n    <loc>${SITE_URL}${path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`);
  });

  // Sanity posts
  sanityPosts.forEach((post) => {
    const slug = post.currentSlug || post.slug;
    if (!slug) return;
    const loc = `${SITE_URL}/blogs/${slug}`;
    const lastmod = post._updatedAt || post._createdAt || new Date().toISOString();
    urls.push(`  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`);
  });

  // WordPress posts
  wpPosts.forEach((post) => {
    const slug = post.slug;
    if (!slug) return;
    const loc = `${SITE_URL}/blogs/${slug}`;
    const lastmod = post.date || new Date().toISOString();
    urls.push(`  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`);
  });

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
}

export async function getServerSideProps({ res }) {
  const staticUrls = [
    "/",
    "/services",
    "/digital-marketing-agency-dubai",
    "/website-development-company-in-dubai",
    "/ui-ux-design-services-dubai",
    "/mobile-app-development-dubai",
    "/dubai-ecommerce-agency",
    "/emerging-technology",
    "/blogs",
    "/contact",
    "/about",
    "/casestudies",
  ];

  const sanityQuery = `*[_type == "post"]{ _id, _createdAt, _updatedAt, title, "currentSlug": slug.current }`;

  let sanityPosts = [];
  let wpPosts = [];

  try {
    const [sanityResult, wpResult] = await Promise.all([
      client.fetch(sanityQuery),
      GetAllPosts(),
    ]);

    sanityPosts = sanityResult || [];
    wpPosts = wpResult || [];
  } catch (e) {
    sanityPosts = [];
    wpPosts = [];
  }

  const sitemap = generateSiteMap({ staticUrls, sanityPosts, wpPosts });

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
  return null;
}
