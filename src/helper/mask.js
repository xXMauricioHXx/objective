export const price = value => {
  const maskedValue = value
    .replace(/\D/g, "")
    .replace(/^0+/, "")
    .padStart(3, "0")
    .replace(/(\d)(\d{8})$/, "$1.$2")
    .replace(/(\d)(\d{5})$/, "$1.$2")
    .replace(/(\d)(\d{2})$/, "$1,$2");

  return maskedValue ? `R$ ${maskedValue}` : null;
};
