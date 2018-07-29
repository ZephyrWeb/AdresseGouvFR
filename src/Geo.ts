import * as Axios from "axios";
import {AxiosInstance, AxiosResponse} from "axios";
import { Commune, Departement } from "./Model";
import { CommuneSearch, CommunesSearch, Search } from "./Parameter";

export class Geo {
    protected axios: AxiosInstance;

    constructor() {
        this.axios = Axios.default.create({
          baseURL: 'https://geo.api.gouv.fr',
          timeout: 5000,
          // headers: {'X-Custom-Header': 'foobar'}
        });
    }
    public async communes(terms: CommunesSearch): Promise<Commune[]>{
        let response: AxiosResponse;
        try {
            response = await this.axios.get('/communes', {params: terms.query});
            return response.data;
        } catch (error) {
            console.error(error);
        }
        return [];
    }
    public async communeParCode(terms: CommuneSearch): Promise<Commune> {
        let response: AxiosResponse;
        try {
            response = await this.axios.get('/communes/' + terms.code, {params: terms.query});
            return response.data;
        } catch (error) {
            console.error(error);
        }
        return {};
    }
    public async communesParDepartement(terms: CommuneSearch): Promise<Commune[]> {
        let response: AxiosResponse;
        try {
            response = await this.axios.get('/departements/' + terms.code + '/communes', {params: terms.query});
            return response.data;
        } catch (error) {
            console.error(error);
        }
        return [];
    }
    public async departements(terms: Search): Promise<Departement[]> {
        let response: AxiosResponse;
        try {
            response = await this.axios.get('/departements', {params: terms.query});
            return response.data;
        } catch (error) {
            console.error(error);
        }
        return [];
    }
    public async departementByCode(terms: Search): Promise<Departement> {
        let response: AxiosResponse;
        try {
            response = await this.axios.get('/departements/'+terms.code, {params: terms.query});
            return response.data;
        } catch (error) {
            console.error(error);
        }
        return [];
    }
    public async departementsByRegion(terms: Search): Promise<Departement> {
        let response: AxiosResponse;
        try {
            response = await this.axios.get('/regions/'+terms.code+'/departements', {params: terms.query});
            return response.data;
        } catch (error) {
            console.error(error);
        }
        return [];
    }
    public async regions(terms: Search): Promise<Departement> {
        let response: AxiosResponse;
        try {
            response = await this.axios.get('/regions', {params: terms.query});
            return response.data;
        } catch (error) {
            console.error(error);
        }
        return [];
    }
    public async regionByCode(terms: Search): Promise<Departement> {
        let response: AxiosResponse;
        try {
            response = await this.axios.get('/regions/'+terms.code, {params: terms.query});
            return response.data;
        } catch (error) {
            console.error(error);
        }
        return [];
    }
}
