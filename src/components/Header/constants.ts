import {HOME_PAGE, NEW_SERVICE_PAGE, PROFILE_PAGE} from "../../constants/urls";

type page = {
    name: string,
    url: string
}
export const PAGES: Array<page> = [{name: 'Home', url: HOME_PAGE }, {name: 'Nuevo servicio', url: NEW_SERVICE_PAGE}, {name: 'Perfil', url: PROFILE_PAGE}]
export const settings = ['Logout'];
