import  { createClient } from '@sanity/client';

const client = createClient({
  projectId: "sszv4zrt",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true,
});

export default client;
