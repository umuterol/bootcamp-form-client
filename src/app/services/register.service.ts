import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private URL = 'https://localhost:7237/api';

  constructor(private http: HttpClient) {}

  saveUser(user: User) {
    return this.http.post<any>(`${this.URL}/Test/SaveUser`, user);
  }
}
