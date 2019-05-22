import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SERVER_URL } from 'src/environments/environment';

const BASIC_AUTHORIZATION_TOKEN = btoa('spring-security-oauth2-read-write-client:spring-security-oauth2-read-write-client-password1234')



@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        let headers = new HttpHeaders()
        headers = headers.set('Content-Type' , 'application/x-www-form-urlencoded')
        headers = headers.set('Access-Control-Allow-Headers', 'x-requested-with, authorization')
        
        
        headers = headers.set("Authorization", "Basic " + BASIC_AUTHORIZATION_TOKEN)   
        const body = new HttpParams()
        .set('grant_type', 'password')
        .set('username', username)
        .set('password', password);

        return this.http.post<User>(`${SERVER_URL}/oauth/token`, body.toString(),
         { headers : headers  })
            .pipe(map(response => {
                let token = response['access_token']
                // login successful if there's a jwt token in the response
                if (token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify( { token : token } ));
                    this.currentUserSubject.next({ token : token });
                }

                return response;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}