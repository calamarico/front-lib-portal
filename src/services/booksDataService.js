import http from "../http-common";

class BooksDataService {
  static controller;

  abort() {
    if (BooksDataService.controller) {
      BooksDataService.controller.abort();
    }
  }
  search(text) {
    if (BooksDataService.controller) {
      BooksDataService.controller.abort();
    }
    BooksDataService.controller = new AbortController();
    return http.get(`/search.json?q=${text.replace(/ /g,"+")}&fields=title,author_name,isbn`, {
      signal: BooksDataService.controller.signal,
    });
  }
}

export default new BooksDataService();
