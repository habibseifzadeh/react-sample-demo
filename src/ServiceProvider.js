
export default class ServiceProvider {
    hostAddress = 'http://localhost:8080/demo/';

    //a address composer function can be useful

    authenticate(username, password, responseCallback) {
        var apiAddress = 'is-password-correct';
        let response;
        
        fetch(this.hostAddress + apiAddress + "?username="
        + username + "&password=" + password).then( res => res.text())
        .then((result) => {
            responseCallback(result === 'true' ? true : false);
        });
    }
}