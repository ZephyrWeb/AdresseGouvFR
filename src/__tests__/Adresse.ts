import { Adresse }  from '../Adresse';

it('Find Caen', async () => {
    const adresse = new Adresse();
    const result = await adresse.search('Caen');
    expect(result[0].properties.type).toBe("municipality");
    expect(result[0].properties.postcode).toBe("14000");
    expect(result[0].properties.label).toBe("Caen");
});
