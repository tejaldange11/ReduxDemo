import {COUNTRY_LISTING} from './index';

//export const COUNTRY_LISTING = 'COUNTRY_LISTING';

// export const countryData = () => {
//   fetch('https://restcountries.eu/rest/v2')
//     .then((res) => res.json())
//     .then((country_listing) => {
//       console.log('action', country_listing);
//       dispatch({
//         type: COUNTRY_LISTING,
//         payload: country_listing,
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

export const countryData = () => (dispatch) => {
  fetch('https://restcountries.eu/rest/v2')
    .then((res) => res.json())
    .then((country_listing) =>
      dispatch({
        type: COUNTRY_LISTING,
        payload: country_listing,
      }),
    )
    .catch((error) => {
      console.log(error);
    });
};
