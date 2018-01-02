import axios from "axios";
const ROOT_URL = "http://demo4972655.mockable.io/user/test";
import "jquery";

export const AUTHN = "AUTHENTICATION";
debugger
export function authenticate(props) {
    props.webId="gmps-jerrys-cadillac";
    const request = axios.post(ROOT_URL, props);

    return{
        type: AUTHN,
        payload : request
    };
}