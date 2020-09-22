import {COUNTRY_LISTING} from '../actions/index';

const initialState = {
  country_listing: [],
};

export default function (state = initialState, action) {
  // debugger
  switch (action.type) {
    case COUNTRY_LISTING:
      return {
        ...state,
        country_listing: action.payload,
      };
    default:
      return state;
  }
}

// import {COUNTRY_LISTING} from '../actions/countryActions';
//
// const initialState = {
//   country_listing: [],
// };
//
// const Testreducer = (state = initialState, action) => {
//   switch (action.type) {
//     case COUNTRY_LISTING:
//       return {
//         ...state,
//         country_listing: action.payload,
//       };
//     default:
//       return state;
//   }
// };
// export default Testreducer;
