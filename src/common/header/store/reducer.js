import * as constants from './constants'
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1,
    test:1,
});

const stateFn = (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        return state.set('focused', true);
    }
    if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false);
    }
    if (action.type === constants.CHANGE_LIST) {
        return state.merge({
            list: action.data,
            totalPage: action.totalPage
        })
    }
    if (action.type === constants.MOUSE_ENTER) {
        return state.set('mouseIn', true);
    }
    if (action.type === constants.MOUSE_LEAVE) {
        return state.set('mouseIn', false);
    }
    if (action.type === constants.CHANGE_PAGE) {
        return state.set('page', action.page);
    }
    if (action.type === constants.CHANGE_TEST) {
        return state.set('test', action.test);
    }
    return state;
};

export default stateFn;