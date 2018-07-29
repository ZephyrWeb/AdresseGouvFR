import * as Axios from "axios";
import {AxiosInstance, AxiosResponse} from "axios";

export class Adresse {
    protected axios: AxiosInstance;

    constructor() {
        this.axios = Axios.default.create({
          baseURL: 'https://api-adresse.data.gouv.fr',
          timeout: 5000,
          // headers: {'X-Custom-Header': 'foobar'}
        });
    }

    public async search(terms: string) {
        let response: AxiosResponse;
        try {
            response = await this.axios.get('/search/?q=' + terms);
            return response.data.features;
        } catch (error) {
            // console.error(error);
        }
    }
}
