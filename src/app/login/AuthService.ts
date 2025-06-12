import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
<<<<<<< HEAD
  providedIn: 'root',
=======
  providedIn: 'root'
>>>>>>> 1c30bd43 (new)
})
export class AuthService {
  private apiUrl = 'http://localhost:8089/api/auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      map(response => {
        localStorage.setItem('jwtToken', response.token);
        localStorage.setItem('userId', response.userId);
        localStorage.setItem('role', response.role);
        return response;
      })
    );
  }

<<<<<<< HEAD
  register(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { email, password }).pipe(
      map(response => {
        return response;
      })
    );
  }
  

=======
>>>>>>> 1c30bd43 (new)
  getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
  }
}
