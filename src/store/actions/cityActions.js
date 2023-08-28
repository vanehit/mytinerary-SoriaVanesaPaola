
// Acción para filtrar ciudades
export const filterCities = (search) => (dispatch, getState) => {
    if (typeof search !== 'string') {
      return;
    }

// Reducer para manejar la acción de filtrar ciudades
const allCities = getState().city.cities;
const filteredCities = allCities.filter(city =>
  city.name.toLowerCase().startsWith(search.toLowerCase())
);

dispatch({
  type: 'city/filterCities',
  payload: filteredCities,
});
}