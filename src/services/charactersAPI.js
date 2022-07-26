import axios from 'axios';

const DEFAULT_TIMEOUT = 30000;
const DEFAULT_URL = 'https://phvleite-ft.herokuapp.com';
// const DEFAULT_URL = 'http://localhost:3000';

class CharactersService {
  constructor({ url = DEFAULT_URL, timeout = DEFAULT_TIMEOUT }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }

  async getCharacters(name, page, size) {
    const params = {
      page,
      size,
      name,
    };

    return this.http.get('/', { params });
  }
}

export default CharactersService;
