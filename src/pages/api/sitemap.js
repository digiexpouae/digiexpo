// import staticSitemap from "../../../public/sitemap";
import client, { urlForImage } from "@/sanityConfig";

const staticSitemap = [
    { path: "/", createdAt:"2024-12-14T14:06:01+00:00",priority: 1.00 },
    { path: "/digital-marketing-agency-dubai", createdAt:"2024-12-14T14:06:03+00:00",priority: 0.80 },
    { path: "/website-development-company-in-dubai", createdAt:"2024-12-15T02:54:45+00:00",priority: 0.80 },
    { path: "/best-web-design-company-dubai", createdAt:"2024-12-15T02:54:44+00:00",priority: 0.80 },
    { path: "/mobile-app-development-company-dubai", createdAt:"2024-12-15T02:54:46+00:00",priority: 0.80 },
    { path: "/dubai-ecommerce-agency", createdAt:"2024-12-17T10:19:05+00:00",priority: 0.80 },
    { path: "/emerging-technology", createdAt:"2024-12-17T10:19:06+00:00",priority: 0.80 },
    { path: "/blogs", createdAt:"2024-12-17T10:19:17+00:00",priority: 0.80 },
    { path: "/contact", createdAt:"2024-12-14T14:06:01+00:00",priority: 0.80 },
  ];
export default async function handler(req, res) {
  const baseUrl = "https://www.digiexpo.ae"; // Change to your domain

  // 🔹 Fetch blog slugs from Sanity
  const query = `*[_type == "post"]{ "path": "/blog/" + slug.current,  "createdAt": publishedAt 
 }`;
  const blogPosts = await client.fetch(query);
{console.log(blogPosts)}
    // 🔹 Combine static pages with blog posts
  const allUrls = [...staticSitemap, ...blogPosts];

  // 🔹 Generate XML sitemap
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  
  allUrls.forEach((item) => {
let priority = item.path === "/" ? 1.0 : item.path.startsWith("/blog") ? 0.64 : 0.80; 
    xml += `<url>
    <loc>${baseUrl}${item.path}</loc>
    // ${`<lastmod>${item.createdAt}</lastmod>`}
    <changefreq>daily</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
  });

  xml += `</urlset>`;
  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(xml);
}
