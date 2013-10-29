/**
* Created by ClintEdmonson on 10/29/13.
*/
var AuthService = (function () {
    function AuthService() {
    }
    AuthService.Login = function () {
        this.isLoggedIn = true;
    };

    AuthService.logOut = function () {
        this.isLoggedIn = false;
    };

    AuthService.CallServer = function () {
        if (!this.isLoggedIn)
            throw "Must login before making calls to server";

        return 25;
    };
    AuthService.isLoggedIn = false;
    return AuthService;
})();
//# sourceMappingURL=authservice.js.map
