import graphqlRequest from "./graphqlRequest";

export async function getSeo(pageType = "post", slug = "/") {
	const query = `
		query getSeo {
			${pageType}(id: "${slug}", idType: SLUG) {
				seo {
					title
					metaDesc
					schema {
						raw
					}
					opengraphTitle
					opengraphDescription
					opengraphUrl
					opengraphImage {
						mediaItemUrl
					}
					opengraphType
					opengraphSiteName
				}
			}
		}
	`;

	const resJson = await graphqlRequest(query);
	const seoData = resJson?.data?.[pageType]?.seo ?? null;
	return seoData;
}