import { Departement } from "./Departement";
import { Region } from "./Region";

export class Commune {
    // Code INSEE de la commune
    public code: string
    // Nom de la commune
    public nom: string
    // Liste des codes postaux associés à la commune
    public codesPostaux: string[];
    // Code du département associé à la commune
    public codeDepartement: string;
    // Code de la région associée à la commune
    public codeRegion: string;
    public departement: Departement;
    public region:	Region;
    // Population municipale
    public population:	number;
    // Surface de la commune, en mètres-carrés
    public surface: number;
    // Centre de la commune (Point GeoJSON)
    public centre: any;
    // Contour de la commune (Polygon GeoJSON)
    public contour: any
}
