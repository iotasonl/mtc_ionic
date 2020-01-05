import { Injectable } from '@angular/core';

const apiUrl = 'http://192.168.1.31:801/mtc_new/index.php/api/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  postData(credentials) {

    const httpHeaders = new Headers();
    httpHeaders.append('X-API-KEY', 'rohit@123');
    httpHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: httpHeaders,
      body: credentials,
      redirect: 'follow'
    };

    return fetch(apiUrl, requestOptions)
    .then(response => response.text())
    .then(result => result)
    .catch(error => error);

  }
}
