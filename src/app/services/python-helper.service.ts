import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PythonHelperService {

  paramsSet = false

  private type1 = 'http://122.248.210.71:8080/type1'
  private type2 = 'http://122.248.210.71:8080/type2'
  private type3 = 'http://122.248.210.71:8080/type3'
  private type4 = 'http://122.248.210.71:8080/type4'

  constructor(private httpClient: HttpClient) { }

  updateConstraints(budget, duration, noPerson){
    localStorage.setItem("budget", budget)
    localStorage.setItem("duration", duration)
    localStorage.setItem("noPerson", noPerson)
    console.log(budget, duration, noPerson)
    this.paramsSet = true
  }

  isParamsSet(){
    return this.paramsSet
  }

  getConstraints(){
    console.log(localStorage.getItem("budget"), localStorage.getItem("duration"), localStorage.getItem("noPerson"))
  }

  getTest(){
    return this.httpClient.get('http://122.248.210.71:8080/helper/testMessage')
  }

  getDefTest(){
    return this.httpClient.get('http://122.248.210.71:8080/default')
  }

  postType1(){
    return this.httpClient.post(this.type1,
      {
        noPerson: localStorage.getItem("noPerson"),
        budget: localStorage.getItem("budget"),
        duration: localStorage.getItem("duration")
      })
  }
  postType2(){
    return this.httpClient.post(this.type2,
      {
        noPerson: localStorage.getItem("noPerson"),
        budget: localStorage.getItem("budget"),
        duration: localStorage.getItem("duration")
      })
  }
  postType3(){
    return this.httpClient.post(this.type3,
      {
        noPerson: localStorage.getItem("noPerson"),
        budget: localStorage.getItem("budget"),
        duration: localStorage.getItem("duration")
      })
  }
  postType4(){
    return this.httpClient.post(this.type4,
      {
        noPerson: localStorage.getItem("noPerson"),
        budget: localStorage.getItem("budget"),
        duration: localStorage.getItem("duration")
      })
  }
}
