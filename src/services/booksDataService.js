import http from "../http-common";

class BooksDataService {
  search(text) {
    return http.get(`/search.json?q=${text.replace(/ /g,"+")}&fields=title,author_name`);
  }
}

export default new BooksDataService();
