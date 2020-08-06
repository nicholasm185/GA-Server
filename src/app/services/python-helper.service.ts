import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PythonHelperService {

  constructor(private httpClient: HttpClient) { }

  getTest(){
    return this.httpClient.get('http://122.248.210.71:8080/helper/testMessage')
  }

  getDefTest(){
    return this.httpClient.get('http://122.248.210.71:8080/default')
  }
}
