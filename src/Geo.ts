import * as Axios from "axios";
import {AxiosInstance, AxiosResponse} from "axios";
import { Commune, Departement, Region } from "./Model";
import { Search } from "./Parameter";

export class Geo {
    protected axios: AxiosInstance;

    constructor() {
        this.axios = Axios.default.create({
          baseURL: 'https://geo.api.gouv.fr',
          timeout: 5000,
          // headers: {'X-Custom-Header': 'foobar'}
        });
    }
    public Search() {
        return Search;
    }
    public async communes(terms: Search): Promise<Commune[]>{
        let response: AxiosResponse;
        try {
            response = await this.axios.get('/communes', {params: terms.query});
            return response.data;
        } catch (error) {
            console.error(error);
        }
        return [];
    }
    public async communeParCode(terms: Search): Promise<Commune> {
        let response: AxiosResponse;
        try {
            response = await this.axios.get('/communes/' + terms.code, {params: terms.query});
            return response.data;
        } catch (error) {
            console.error(error);
        }
        return new Commune;
    }
    public async communesParDepartement(terms: Search): Promise<Commune[]> {
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
        return new Departement;
    }
    public async departementsByRegion(terms: Search): Promise<Departement[]> {
        let response: AxiosResponse;
        try {
            response = await this.axios.get('/regions/'+terms.code+'/departements', {params: terms.query});
            return response.data;
        } catch (error) {
            console.error(error);
        }
        return [];
    }
    public async regions(terms: Search): Promise<Region[]> {
        let response: AxiosResponse;
        try {
            response = await this.axios.get('/regions', {params: terms.query});
            return response.data;
        } catch (error) {
            console.error(error);
        }
        return [];
    }
    public async regionByCode(terms: Search): Promise<Region> {
        let response: AxiosResponse;
        try {
            response = await this.axios.get('/regions/'+terms.code, {params: terms.query});
            return response.data;
        } catch (error) {
            console.error(error);
        }
        return new Region;
    }
}
