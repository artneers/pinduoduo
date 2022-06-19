import { Observable } from 'rxjs/internal/Observable';
import { Profile } from './../components/my-container/my-container.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.get<Profile>(`${environment.baseUrl}/profile`);
  }

  saveProfile(profile: Profile): Observable<Profile> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<Profile>(`${environment.baseUrl}/profile`, profile, {
      headers
    })
  }
}
