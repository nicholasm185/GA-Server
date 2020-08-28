import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { isNull } from 'util';

@Injectable({
  providedIn: 'root'
})
export class PreferenceTrackerService {

  preference = {
    "amusement_park": 0,
    "art_and_culture": 0,
    "beach": 0,
    "kids_friendly": 0,
    "local_favorite": 0,
    "museum": 0,
    "outdoors": 0,
    "history": 0
  }

  constructor() { }

  getPreference(){
    if(localStorage.getItem("preference") === null){
      this.preference = {
        "amusement_park": 0,
        "art_and_culture": 0,
        "beach": 0,
        "kids_friendly": 0,
        "local_favorite": 0,
        "museum": 0,
        "outdoors": 0,
        "history": 0
      }
    } else {
      this.preference = JSON.parse(localStorage.getItem("preference"))
      console.log(this.preference)
    }
  }

  updatePreference(tag){
    this.preference[tag] ++
    console.log(this.preference)
    localStorage.setItem('preference', JSON.stringify(this.preference))
  }

  getRandomOpts(){
    var keys = Object.keys(this.preference)
    var key1 = keys[keys.length*Math.random()<<0]
    do {
      var key2 = keys[keys.length*Math.random()<<0]
    } while (key1 == key2)
    return [key1, key2]
  }

  getTopTags(){
    var sorted = Object.entries(this.preference).sort((a,b) => b[1] - a[1])
    var topTags = sorted[0][0] + ',' + sorted[1][0] + ',' + sorted[2][0]
    return topTags
  }

  resetTags(){
    localStorage.removeItem('preference')
  }


}
