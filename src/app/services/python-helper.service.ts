import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PythonHelperService {

  budget = 0
  duration = 0
  noPerson = 0

  constructor(private httpClient: HttpClient) { }

  updateConstraints(budget : number, duration : number, noPerson : number){
    this.budget = budget
    this.duration = duration
    this.noPerson = noPerson
    console.log(this.budget, this.duration, this.noPerson)
  }

  getConstraints(){
    console.log(this.budget, this.duration, this.noPerson)
  }

  getTest(){
    return this.httpClient.get('http://122.248.210.71:8080/helper/testMessage')
  }

  getDefTest(){
    return this.httpClient.get('http://122.248.210.71:8080/default')
  }
}
