import {localStorageService} from "../services/localStorageService";

export const getUserId = () =>  localStorageService.getItem('userId');
