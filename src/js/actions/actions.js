import { createAction } from 'redux-actions';

import * as apiClient from '../deckNexusApiClient.js';

export const LIST_DECKS = 'LIST_DECKS';
export const listDecks = createAction(LIST_DECKS, apiClient.getDecks);

export const LIST_DECKS_BY_USER = 'LIST_DECKS_BY_USER';
export const listDecksByUser = createAction(LIST_DECKS_BY_USER, apiClient.getDecksByUser);

export const GET_DECK_BY_HASH = 'GET_DECK_BY_HASH';
export const getDeckByHash = createAction(GET_DECK_BY_HASH, apiClient.getDeckByHash);

export const GET_DECK_BY_NAME = 'GET_DECK_BY_NAME';
export const getDeckByName = createAction(GET_DECK_BY_NAME, apiClient.getDeckByName);

// Save deck
// Delete deck
// Fork deck
// Tag deck