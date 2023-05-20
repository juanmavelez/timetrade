import {HOME_PAGE, NEW_SERVICE_PAGE} from "../../constants/urls";

type page = {
    name: string,
    url: string
}
export const PAGES: Array<page> = [{name: 'Home', url: HOME_PAGE }, {name: 'New Service', url: NEW_SERVICE_PAGE}];
export const settings = ['Profile', 'Logout'];
