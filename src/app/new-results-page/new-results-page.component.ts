import { Component, OnInit, Type } from '@angular/core';
import { PythonHelperService } from '../services/python-helper.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { PreferenceTrackerService } from '../services/preference-tracker.service';
import { isNull } from 'util';

@Component({
  selector: 'app-new-results-page',
  templateUrl: './new-results-page.component.html',
  styleUrls: ['./new-results-page.component.css'],
})
export class NewResultsPageComponent implements OnInit {

  constructor(private pythonService: PythonHelperService, private db: AngularFirestore, public router: Router, private preferenceTrack: PreferenceTrackerService) { }

  selected : Object
  TypeAResults: Object
  TypeBResults: Object
  TypeCResults: Object

  // TODO, DAYS AINT DOING NOTHING
  days = []
  daysA = []
  daysB = []
  daysC = []

  re = RegExp(' ',"g")

  detailsA = {}
  detailsB = {}

  distance = {}
  distanceA = {}
  distanceB = {}
  
  selectDetails = {}

  savedSpots = []

  ngOnInit(): void {
    this.pythonService.postType8(this.preferenceTrack.getTopTags()).subscribe(data => {
      if(data !== this.TypeAResults){
        this.TypeAResults = data
        this.daysA = data["0"]['per-day-route']
        this.getDistance(this.daysA, this.distanceA)
        console.log(this.distanceA)
        this.fireQuery(data["0"]['per-day-route'], this.detailsA)
      }
    })
    this.pythonService.postType8(this.preferenceTrack.getAllTags()).subscribe(data => {
      if(data !== this.TypeBResults){
        this.TypeBResults = data
        this.daysB = data["0"]['per-day-route']
        this.getDistance(this.daysB, this.distanceB)
        console.log(this.distanceB)
        this.fireQuery(data["0"]['per-day-route'], this.detailsB)
      }
    })
  }

  swithSelected(type: string){
    if (type == "a") {
      this.selected = this.TypeAResults
      this.selectDetails = this.detailsA
      this.days = this.daysA
      this.distance = this.distanceA
      this.savedSpots = []
    } else if (type == "b") {
      this.selected = this.TypeBResults
      this.selectDetails = this.detailsB
      this.days = this.daysB
      this.distance = this.distanceB
      this.savedSpots = []
    }
    console.log(this.selected)
    console.log(this.selectDetails)
    console.log(this.days)
  }

  testRefresh(){
    this.selected = this.TypeAResults
  }

  saveSpot(x: string){
    var i = this.savedSpots.indexOf(x)
    if(i == -1){
      this.savedSpots.push(x)
    }
    console.log(this.savedSpots)
  }

  removeSpot(x: string){
    var i = this.savedSpots.indexOf(x)
    if(i !== -1){
      this.savedSpots.splice(i, 1)
    }
    console.log(this.savedSpots)
  }

  fireQuery(dRoute, det){
    for(let x of dRoute){
        for(let y of x ){
            console.log(y)
            this.db.collection('POI', ref => ref.where('name', '>=', y).limit(1)).valueChanges().subscribe(data => {
                det[y] = data[0]
            })
        }
    }
}

  getDistance(days, distanceDict){
  days.forEach(x => {
    x.forEach(y => {
      if(x.indexOf(y) != x.length - 1){
        this.pythonService.postGetDistance(y, x[x.indexOf(y)+1]).subscribe(data => {
          distanceDict[y+"to"+x[x.indexOf(y)+1]] = data['distance']
        })
      }
    });
  });
  }

  resetAll(){
    localStorage.clear()
    this.router.navigate(['/start'])
  }
  

  shakeOff(){
    localStorage.setItem("savedSpots", this.savedSpots.join(','))
    this.router.navigate(['shookResults'])
  }

}
