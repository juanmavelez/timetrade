import {localStorageService} from "../services/loclStorageService";

export const getBearer = () =>  localStorageService.getItem('Bearer')
