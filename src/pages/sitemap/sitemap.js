import client from "@/sanityConfig";

const BASE_URL='https://www.digiexpo.ae/'
export const query = `*[_type == "post" && slug.current == $slug][0]{
  title,
  "currentSlug": slug.current,
  body,
  mainImage,ogImage,ogDescription,
  ogTitle,metaTags,description
}`;
export async function sitemap(){
  try{
const post=await client.fetch(query)
const urls=post.map((item)=>{
  
  return `${BASE_URL}/item/${item.currentSlug}}`

})
return urls
  }catch (error) {
    console.error("Error fetching data for sitemap:", error);
    return [];

  }
}
sitemap()