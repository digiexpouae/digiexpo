export default async function graphqlRequest(query) {
	const url = "https://tan-porcupine-422913.hostingersite.com/graphql";
	const headers = { "Content-Type": "application/json" };

	const res = await fetch(url, {
		method: "POST",
		headers,
		body: JSON.stringify({ query }),
	});

	const resJson = await res.json();
	return resJson;
}