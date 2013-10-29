/**
 * Created by ClintEdmonson on 10/29/13.
 */
class AuthService
{
    private static isLoggedIn :  boolean = false;

    static Login() {
        this.isLoggedIn = true;
    }

    static logOut() {
        this.isLoggedIn = false;
    }

    static CallServer() : number {
        if( !this.isLoggedIn )
            throw "Must login before making calls to server";

        return 25;
    }

}