export default function verificate(values) {
  const { estado, municipio, nome } = values;
  let queryString;
  if (!nome) {
    queryString = new URLSearchParams({
      estado,
      municipio,
    }).toString();

    return queryString;
  } else {
    queryString = new URLSearchParams({
      estado,
      municipio,
      nome,
    }).toString();

    return queryString;
  }
}
