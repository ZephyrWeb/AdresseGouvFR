import { Format } from "./Format";
import { Geometry } from "./Geometry";

export class Search {
    public static create(params: any) : any {
        const search = new this;
        for(const [key, value] of Object.entries(params)) {
            search[key] = value;
        }

        return search;
    }
    // description: Code INSEE
    public code: string;
    public fields: string[] = ['nom', 'centre'];
    public format: Format = Format.json;
    public geometry: Geometry = Geometry.centre;
    // Nombre d'éléments à retourner
    public limit: number = 5;
    // Only for Commune
    // description: Code postal associé
    public codePostal: string
    // description: Latitude (en degrés)
    public lat: number;
    // description: Longitude (en degrés)
    public lon: number;
    // description: Nom de la commune
    public nom: string;
    // description: Mode de boost de la recherche par nom
    public boost: string;
    // description: Code du département associé
    public codeDepartement: string;
    // description: Code de la région associée
    public codeRegion: string;

    public get query() {
        const query = {};
        for(const [key, value] of Object.entries(this)) {
            if(key==='fields') {
                query[key] = value.join(',');
            }else if(value) {
                query[key] = value;
            }
        }

        return query;
    }
}
