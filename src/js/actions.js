
export const ADD_DECK = Symbol();
export function addDeck(deck) {
	return {
		type: ADD_DECK,
		payload: {
			deck: deck
		},
	};
}

export const REMOVE_DECK = Symbol();
export function removeDeck(deckId) {
	return {
		type: REMOVE_DECK,
		payload: {
			deckId: deckId
		},
	};
}

export const SELECT_DECK = Symbol();
export function selectDeck(deckId) {
	return {
		type: SELECT_DECK,
		payload: {
			deckId: deckId
		}
	}
}