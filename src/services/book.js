import http from "./../http-common";

class BooksDataService {
  search(text) {
    return http.get(`/search.json?q=${text.replace(/ /g,"+")}`);
  }
}

export default new BooksDataService();
