import { RootState } from "../app/store";

export const accountTypesSelector = (state: RootState) => state.booksReducer?.data?.numFound;
export const searchResultSelector = (state: RootState) => state.booksReducer?.data?.docs;
