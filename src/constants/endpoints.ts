const basePath = "https://timetrade.fly.dev"

export const LOGIN_ENDPOINT = `${basePath}/users/sign_in.json`

export const SIGN_UP = `${basePath}/users.json`

export const LOGOUT_ENDPOINT = `${basePath}/users/sign_out.json`

export const REQUEST_TASK_ENDPOINT = (serviceId: string) => `${basePath}/services/${serviceId}/tasks.json`

export const CREATE_SERVICE_ENDPOINT = `${basePath}/services.json`

export const HOME_PAGE_ENDPOINT = `${basePath}/services.json`

export const SHOW_SERVICE_ENDPOINT = `${basePath}/services/`

export const USER_PROFILE_ENDPOINT = `${basePath}/users/show.json`


//LOCAL ENDPOINTS

export const LOCAL_LOGIN_ENDPOINT = `api/login`
export const LOCAL_SIGN_UP = `api/signup`
