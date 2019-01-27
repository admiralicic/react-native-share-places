
import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

const initialState = {
    places: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random().toString(), 
                    name: action.placeName,
                    image: {
                        uri: "https://images.pexels.com/photos/1143705/pexels-photo-1143705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    }
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.placeKey;
                }),
                selectedPlace: null 
            }        
        default:
            return state;
    }
};

export default reducer;