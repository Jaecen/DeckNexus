import Configuration from './configuration.js';

export async function getDecks() {
	const response = await fetch(`${Configuration.api.url}/decks`);
	const json = await response.json();
	return json;
}

export async function getDecksByUser(user) {
	const response = await fetch(`${Configuration.api.url}/decks/${user}`);
	const json = await response.json();
	return json;
}

export async function getDeckByName(user, name) {
	const response = await fetch(`${Configuration.api.url}/decks/${user}/${name}`);
	const json = await response.json();
	return json;
}

export async function getDeckByHash(hash) {
	const response = await fetch(`${Configuration.api.url}/decks/@${hash}`);
	const json = await response.json();
	return json;
}