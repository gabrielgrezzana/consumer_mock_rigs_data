import axios from "axios";


class RigsService {
    private readonly baseUrl = 'http://localhost:3000/rigs';

    async getRig() {
        const response = await axios.get(`${this.baseUrl}`);
        return response.data.json();
    }

    async getRigs() {
        const response = await axios.get(`${this.baseUrl}`);
        return response.data.json();
    }
}

export default new RigsService();