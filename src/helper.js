export function obtenerDiferenciaDeAño(año) {
  return new Date().getFullYear() - año;
}

export function incrementoMarca(marca) {
  let incremento;

  switch (marca) {
    case 'Europeo':
      incremento = 1.3;
      break;

    case 'Americano':
      incremento = 1.15;
      break;

    case 'Asiatico':
      incremento = 1.05;
      break;

    default:
      break;
  }
  return incremento;
}

export function incrementoPlan(plan) {
  return plan === 'Básico' ? 1.2 : 1.5;
}
