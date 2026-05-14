import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  private api = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get(this.api);
  }
  UserDelete(id: number) {
    let httpheaders = new HttpHeaders();
    let options = {
      headers: httpheaders,
    };
    return this.http.delete<number>(this.api + '/' + id);
  }
}
