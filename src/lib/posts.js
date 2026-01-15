import graphqlRequest from "./graphqlRequest";

export async function GetAllPosts() {
	const query = `
		query getAllPosts {
			posts {
				nodes {
					date
					slug
					title
					excerpt
					featuredImage {
						node {
							mediaDetails {
								file
								sizes {
									sourceUrl
									width
									height
								}
							}
						}
					}
					categories {
						nodes {
							name
							slug
						}
						pageInfo {
							startCursor
							hasPreviousPage
							hasNextPage
							endCursor
						}
					}
				}
			}
		}
	`;

	const resJson = await graphqlRequest(query);
	const allPosts = resJson?.data?.posts?.nodes ?? [];

	return allPosts;
}