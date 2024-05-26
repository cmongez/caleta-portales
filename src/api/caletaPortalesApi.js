const URL_CALETA_PORTALES =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRISHquz_j-ai3oglq9velVJ6iMbMwCRE3uqsqaVloOSVKAmOEQcH3gsCKnTZ_dvZceTvdTT1FpCClD/pub?output=tsv';

export const getApiPrecios = async () => {
  const request = await fetch(URL_CALETA_PORTALES);
  const response = await request.text();
  const data = response
    .split('\n')
    .slice(1)
    .map((row) => {
      let [producto, precio, descripcion, img] = row.split('\t');

      console.log('first', {
        producto,
        precio,
        descripcion,
        img,
      });
      return {
        producto,
        precio,
        descripcion,
        img,
      };
    });
  return data;
};
