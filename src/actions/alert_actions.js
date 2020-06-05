import { alertConstants } from '../constants';

export const alertActions = {
    success,
    error,
    clear
};

function success(message){
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {

    return { type: alertConstants.ERROR, message };
}

function clear() {
    localStorage.removeItem('user')
    return { type: alertConstants.CLEAR };
}
