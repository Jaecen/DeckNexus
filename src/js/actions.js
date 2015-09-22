export const DECK_ADD = Symbol('deck add');
export function deckAdd(deck) {
	return {
		type: DECK_ADD,
		payload: { },
	};
}

export const DECK_REMOVE = Symbol('deck remove');
export function deckRemove(deck) {
	return {
		type: DECK_REMOVE,
		payload: {
			deck: deck
		},
	};
}

export const DECK_SELECT = Symbol('deck select');
export function deckSelect(deck) {
	return {
		type: DECK_SELECT,
		payload: {
			deck: deck
		}
	}
}

export const DECK_UPDATE = Symbol('deck update');
export function deckUpdate(deck) {
	return {
		type: DECK_UPDATE,
		payload: {
			deck: deck
		},
	};
}

export const EDITOR_CHANGE_NAME = Symbol('editor change name');
export function editorChangeName(name) {
	return {
		type: EDITOR_CHANGE_NAME,
		payload: {
			name,
		}	
	};
}

export const EDITOR_CHANGE_DECKLIST = Symbol('editor change decklist');
export function editorChangeDecklist(decklist) {
	return {
		type: EDITOR_CHANGE_DECKLIST,
		payload: {
			decklist,
		}	
	};
}