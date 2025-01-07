import  { createClient } from '@sanity/client';
import  ImageUrlBuilder from '@sanity/image-url';
const client = createClient({
  projectId: "sszv4zrt",
  dataset: "digiexpo",
  apiVersion: "2022-03-07",
  useCdn: false,
});
export default client;

const builder = ImageUrlBuilder(client)
export const urlForImage =(source) => {
  return builder.image(source)
}