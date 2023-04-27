export const MARCA = [
    {
        id: 1,
        nombre: 'Audi'
    },
    {
        id: 2,
        nombre: 'BMW'
    },
    {
        id: 3,
        nombre: 'Citroën'
    },
    {
        id: 4,
        nombre: 'Fiat'
    }, {
        id: 5,
        nombre: 'Ford'
    }, {
        id: 6,
        nombre: 'Mercedes-Benz'
    }, {
        id: 7,
        nombre: 'Nissan'
    }, {
        id: 8,
        nombre: 'Opel'
    }, {
        id: 9,
        nombre: 'Peugeot'
    }, {
        id: 10,
        nombre: 'Renault'
    }, {
        id: 11,
        nombre: 'Seat'
    }, {
        id: 12,
        nombre: 'Skoda'
    }, {
        id: 13,
        nombre: 'Toyota'
    }, {
        id: 14,
        nombre: 'Volkswagen'
    },
    {
        id: 15,
        nombre: 'Volvo'
    }
];
const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from(new Array(20), ((valor, index) => YEARMAX - index));
export const PLANES = [
    {
        id: 1,
        nombre: 'Básico'
    },
    {
        id: 2,
        nombre: 'Completo'
    }
];