import { Search } from "./Search";

export class CommuneSearch extends Search {
    // description: Code de la commune
    public code: string
    public fields: string[] = ['nom', 'centre'];
    // Nombre d'éléments à retourner
    public limit: number = 5;

    public get query() {
        const query = {};
        for(const [key, value] of Object.entries(this)) {
            if(key==='code'){
                continue;
            }
            if(key==='fields') {
                query[key] = value.join(',');
            }else if(value) {
                query[key] = value;
            }
        }

        return query;
    }
}
