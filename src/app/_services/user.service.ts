import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVER_URL } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getContext(){
        return this.http.get(`${SERVER_URL}/admins/me`)
    }

    getAll() {
        return this.http.get<User[]>(`${SERVER_URL}/users`);
    }

    getById(id: number) {
        return this.http.get(`${SERVER_URL}/users/${id}`);
    }

    register(user: User) {
        return this.http.post(`${SERVER_URL}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${SERVER_URL}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${SERVER_URL}/users/${id}`);
    }
}