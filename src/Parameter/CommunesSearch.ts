import { Format } from "./Format";
import { Search } from "./Search";

export class CommunesSearch extends Search{
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
    // description: Code de la commune
    public code: string;
    // description: Code du département associé
    public codeDepartement: string;
    // description: Code de la région associée
    public codeRegion: string;
    public fields: string[] = ['nom', 'centre'];
    public format: Format = Format.json;
    // Nombre d'éléments à retourner
    public limit: number = 5;
}
