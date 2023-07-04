import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {
    this.getData();
  }

  user: string = '';

  setUser(value: string) {
    this.user = value;
  }

  getData() {
    console.log(
      'chamou  ' +
        `https://api.github.com/users/${this.user != '' ? this.user : 'ugabb'}`
    );
    return this.http.get(
      `https://api.github.com/users/${this.user != '' ? this.user : 'ugabb'}`
    );
  }
}
