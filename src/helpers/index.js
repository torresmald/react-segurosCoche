export const diferenciaYears = (year) => {
    return new Date().getFullYear() - year;
}
export const calculaMarcas = (marca) => {
    const incrementos = {
        '1': 1.30,
        '2': 1.30,
        '3': 1.05,
        '4': 1.05,
        '5': 1.15,
        '6': 1.30,
        '7': 1.15,
        '8': 1.15,
        '9': 1.05,
        '10': 1.05,
        '11': 1.05,
        '12': 1.15,
        '13': 1.15,
        '14': 1.30,
        '15': 1.30
      };
      return incrementos[marca] || incrementos.default;
}

export const calculaPlan = (plan) => {
    return plan === '1' ? 1.2 : 1.5
}

export const formateoMoneda = (cantidad) => {
    return cantidad.toLocaleString('es-ES', {
        style: 'currency',
        currency: 'EUR'
    })
}