import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PythonHelperService {

  constructor(private httpClient: HttpClient) { }

  getTest(){
    return this.httpClient.get('http://127.0.0.1:8080/helper/testMessage')
  }
}