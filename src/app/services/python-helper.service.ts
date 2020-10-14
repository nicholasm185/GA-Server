import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PythonHelperService {

  paramsSet = false

  private type1 = 'http://175.41.179.70:8080/type1'
  private type2 = 'http://175.41.179.70:8080/type2'
  private type3 = 'http://175.41.179.70:8080/type3'
  private type4 = 'http://175.41.179.70:8080/type4'
  private type5 = 'http://175.41.179.70:8080/type5'
  private type6 = 'http://175.41.179.70:8080/type6'
  private type7 = 'http://175.41.179.70:8080/type7'
  private type8 = 'http://175.41.179.70:8080/type8'
  // private type8 = 'http://localhost:8080/type8'
  private reqDist = 'http://175.41.179.70:8080/getDistance'
  private shake = 'http://175.41.179.70:8080/shakeOff'
  // private shake = 'http://localhost:8080/shakeOff'
  private reqConsent = "http://175.41.179.70:8080/recordConsent"

  constructor(private httpClient: HttpClient) { }

  updateConstraints(budget, duration, noPerson){
    localStorage.setItem("budget", budget)
    localStorage.setItem("duration", duration)
    localStorage.setItem("noPerson", noPerson)
    console.log(budget, duration, noPerson)
    localStorage.setItem("paramsSet", "1")
  }

  isParamsSet(){
    return Number(localStorage.getItem("paramsSet"))
  }

  getConstraints(){
    console.log(localStorage.getItem("budget"), localStorage.getItem("duration"), localStorage.getItem("noPerson"))
  }

  getTest(){
    return this.httpClient.post('http://122.248.210.71:8080/default',{})
  }

  getDefTest(){
    return this.httpClient.get('http://122.248.210.71:8080/default')
  }

  postType1(){
    var fd = new FormData()
    fd.append('noPeople', localStorage.getItem("noPerson"))
    fd.append('budget', localStorage.getItem("budget"))
    fd.append('duration', localStorage.getItem("duration"))
    return this.httpClient.post(this.type5,fd)
  }
  postType2(){
    var fd = new FormData()
    fd.append('noPeople', localStorage.getItem("noPerson"))
    fd.append('budget', localStorage.getItem("budget"))
    fd.append('duration', localStorage.getItem("duration"))
    return this.httpClient.post(this.type5,fd)
  }
  postType3(){
    var fd = new FormData()
    fd.append('noPeople', localStorage.getItem("noPerson"))
    fd.append('budget', localStorage.getItem("budget"))
    fd.append('duration', localStorage.getItem("duration"))
    return this.httpClient.post(this.type5,fd)
  }
  postType4(){
    var fd = new FormData()
    fd.append('noPeople', localStorage.getItem("noPerson"))
    fd.append('budget', localStorage.getItem("budget"))
    fd.append('duration', localStorage.getItem("duration"))
    return this.httpClient.post(this.type5,fd)
  }
  postType5(){
    var fd = new FormData()
    fd.append('noPeople', localStorage.getItem("noPerson"))
    fd.append('budget', localStorage.getItem("budget"))
    fd.append('duration', localStorage.getItem("duration"))
    return this.httpClient.post(this.type5,fd)
  }
  postType6(tags){
    var fd = new FormData()
    fd.append('noPeople', localStorage.getItem("noPerson"))
    fd.append('budget', localStorage.getItem("budget"))
    fd.append('duration', localStorage.getItem("duration"))
    fd.append('tags', tags)
    return this.httpClient.post(this.type6,fd)
  }
  postType7(tags){
    var fd = new FormData()
    fd.append('noPeople', localStorage.getItem("noPerson"))
    fd.append('budget', localStorage.getItem("budget"))
    fd.append('duration', localStorage.getItem("duration"))
    fd.append('tags', tags)
    return this.httpClient.post(this.type7,fd)
  }
  postType8(tags){
    var fd = new FormData()
    fd.append('noPeople', localStorage.getItem("noPerson"))
    fd.append('budget', localStorage.getItem("budget"))
    fd.append('duration', localStorage.getItem("duration"))
    fd.append('tags', tags)
    return this.httpClient.post(this.type8,fd)
  }
  shakeOff(tags, savedSpots: string){
    var fd = new FormData()
    fd.append('noPeople', localStorage.getItem("noPerson"))
    fd.append('budget', localStorage.getItem("budget"))
    fd.append('duration', localStorage.getItem("duration"))
    fd.append('tags', tags)
    fd.append('rspots', savedSpots)
    return this.httpClient.post(this.shake,fd)
  }

  postGetDistance(origin: string, destination: string){
    var fd = new FormData()
    fd.append("origin", origin)
    fd.append("destination", destination)
    return this.httpClient.post(this.reqDist, fd)
  }

  recordConsent(name: string){
    var fd = new FormData()
    fd.append("name", name)
    return this.httpClient.post(this.reqConsent, fd)
  }
}
