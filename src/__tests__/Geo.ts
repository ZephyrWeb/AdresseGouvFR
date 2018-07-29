import { Geo }  from '../Geo';
import { CommunesSearch, Search } from '../Parameter';

it('Find Caen by geo API', async () => {
    const geo = new Geo();
    const search = CommunesSearch.create({nom: 'Caen'});
    const result = await geo.communes(search);
    expect(result[0].nom).toBe("Caen");
    expect(result[0].code).toBe("14118");
});

it('Find Caen by code', async () => {
    const geo = new Geo();
    const search = CommunesSearch.create({code: '14118'});
    const result = await geo.communeParCode(search);
    expect(result.nom).toBe("Caen");
    expect(result.code).toBe("14118");
});

it('Find communes by departement', async () => {
    const geo = new Geo();
    const search = CommunesSearch.create({code: '14'});
    const result = await geo.communesParDepartement(search);
    expect(result[0].nom).toBe("Ablon");
    expect(result[0].code).toBe("14001");
});

it('Find departement', async () => {
    const geo = new Geo();
    const search = Search.create({code: '14'});
    const result = await geo.departements(search);
    expect(result[0].nom).toBe("Calvados");
    expect(result[0].code).toBe("14");
});

it('Find departement by code', async () => {
    const geo = new Geo();
    const search = Search.create({code: '14'});
    const result = await geo.departementByCode(search);
    expect(result.nom).toBe("Calvados");
    expect(result.code).toBe("14");
});

it('Find departement by region', async () => {
    const geo = new Geo();
    const search = Search.create({code: '28'});
    const result = await geo.departementsByRegion(search);
    expect(result.length).toBe(5);
    expect(result[0].code).toBe("14");
});

it('Find regions', async () => {
    const geo = new Geo();
    const search = Search.create({});
    const result = await geo.regions(search);
    expect(result.length).toBe(18);
    expect(result[0].code).toBe("01");
});

it('Find regions', async () => {
    const geo = new Geo();
    const search = Search.create({code: '28'});
    const result = await geo.regionByCode(search);
    expect(result.nom).toBe("Normandie");
    expect(result.code).toBe("28");
});
