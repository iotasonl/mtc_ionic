import { Injectable } from '@angular/core';

// const apiUrl = 'http://192.168.1.31:801/mtc_new/index.php/api/';
const apiUrl = 'http://mtc.iotasonl.com/index.php/api/';

const httpHeaders = new Headers();
httpHeaders.append('X-API-KEY', 'rohit@123');
httpHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  constructor() { }

  postData(credentials, method) {

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: httpHeaders,
      body: credentials,
      redirect: 'follow'
    };

    return fetch(apiUrl + method, requestOptions)
    .then(response => response.text())
    .then(result => result)
    .catch(error => error);

  }

}
