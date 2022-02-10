import { combineReducers } from 'redux-immutable';
import { reducer as handerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as loginReducer } from '../pages/login/store';

const reducer = combineReducers({
    header: handerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
});

export default reducer;