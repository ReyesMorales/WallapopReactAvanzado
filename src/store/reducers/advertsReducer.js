// advertsReducer.js

// Acciones
const SET_TAGS = 'adverts/SET_TAGS';
const SET_ADVERTS = 'adverts/SET_ADVERTS';
const SET_ADVERT_DETAIL = 'adverts/SET_ADVERT_DETAIL';
const CREATE_ADVERT = 'adverts/CREATE_ADVERT';
const DELETE_ADVERT = 'adverts/DELETE_ADVERT';

// Estado inicial
const initialState = {
  tags: [],
  adverts: [],
  advertDetail: null,
};

// Reducer
const advertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAGS:
      return {
        ...state,
        tags: action.payload,
      };
    case SET_ADVERTS:
      return {
        ...state,
        adverts: action.payload,
      };
    case SET_ADVERT_DETAIL:
      return {
        ...state,
        advertDetail: action.payload,
      };
    case CREATE_ADVERT:
      return {
        ...state,
        adverts: [...state.adverts, action.payload],
      };
    case DELETE_ADVERT:
      return {
        ...state,
        adverts: state.adverts.filter((advert) => advert.id !== action.payload),
      };
    default:
      return state;
  }
};

// Acciones creadoras
export const setTags = (tags) => ({
  type: SET_TAGS,
  payload: tags,
});

export const setAdverts = (adverts) => ({
  type: SET_ADVERTS,
  payload: adverts,
});

export const setAdvertDetail = (advert) => ({
  type: SET_ADVERT_DETAIL,
  payload: advert,
});

export const createAdvert = (advert) => ({
  type: CREATE_ADVERT,
  payload: advert,
});

export const deleteAdvert = (advertId) => ({
  type: DELETE_ADVERT,
  payload: advertId,
});

export default advertsReducer;
