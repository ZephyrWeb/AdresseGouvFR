import { Geo } from './Geo';

import {Adresse} from './Adresse';
import {Commune, Departement, Region} from './Model';
import {Format, Geometry, Search} from './Parameter';

const DataGouvFr = {
    Adresse, Commune, Departement, Format, Geo, Geometry, Region, Search
};
export {DataGouvFr}

if(typeof(window)!=="undefined") {
    (<any>window).DataGouvFr = DataGouvFr;
}
