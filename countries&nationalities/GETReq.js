let countriesList = [];

const requestCountries = async () => {
  return await fetch ('https://restcountries.eu/rest/v2/all?fields=alpha2Code;name;demonym;nativeName', {
    method: 'GET',
    headers: {
      'Accept': '*/*',
    }
  }).then(resp => resp.json())
    .then(jsonResp => jsonResp.map(el => {
      return ({
        code: el.alpha2Code.toLowerCase(),
        name: el.name,
        nationality: el.demonym,
        nativeName: el.nativeName
      });
    })).then(list => list.sort((a, b) => a.name.localeCompare(b.name)))
       .then(sortedList => countriesList.push(...sortedList));
}
