export function obtenerDiferenciaDeAño(año) {
  return new Date().getFullYear() - año;
}

export function incrementoMarca(marca) {
  let incremento;

  switch (marca) {
    case 'europeo':
      incremento = 1.3;
      break;

    case 'americano':
      incremento = 1.15;
      break;

    case 'asiatico':
      incremento = 1.05;
      break;

    default:
      break;
  }
  return incremento;
}

export function incrementoPlan(plan) {
  return plan == 'basico' ? 1.2 : 1.5;
}
