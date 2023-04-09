import jwtDecode from "jwt-decode";

export function decodeJWT(token) {
    try {
        return jwtDecode(token).aud === "authenticated"
    }

    catch(e) {
        return false
    }
}