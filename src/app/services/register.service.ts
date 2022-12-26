import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private URL = 'https://bugfeedback.site/api';

  constructor(private http: HttpClient) {}

  saveUser(user: User) {
    return this.http.post<any>(`${this.URL}/Test/SaveUser`, user);
  }
}
