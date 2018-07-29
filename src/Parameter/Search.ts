import { Format } from "./Format";
import { Geometry } from "./Geometry";

export class Search {
    public static create(params: any) {
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
