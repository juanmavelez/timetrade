import {localStorageService} from "../services/localStorageService";

export const getBearer = () =>  localStorageService.getItem('Bearer')
