import { rejects } from "assert";

export class AuthService {
    loggIn = false;
    isAuthentication(){
        const promise = new Promise(
            (resolve, rejects) => {
                setTimeout(() => {
                    resolve(this.loggIn);
                }, 800)
            }
        );
        return promise;
    }
    login(){
        this.loggIn = true;
    }
    logout() {
        this.loggIn = false;
    }
}