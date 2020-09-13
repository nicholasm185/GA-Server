import { Component, OnInit } from '@angular/core';
import { PythonHelperService } from '../services/python-helper.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { PreferenceTrackerService } from '../services/preference-tracker.service';

@Component({
  selector: 'app-shook-results-page',
  templateUrl: './shook-results-page.component.html',
  styleUrls: ['./shook-results-page.component.css']
})
export class ShookResultsPageComponent implements OnInit {

  constructor(private pythonService: PythonHelperService, private db: AngularFirestore, public router: Router, private preferenceTrack: PreferenceTrackerService) { }

  selected: Object
  days = []
  re = RegExp(' ',"g")
  selectDetails = {}
  distance = {}
  savedSpots = []

  ngOnInit(): void {
    this.pythonService.shakeOff(this.preferenceTrack.getTopTags(), localStorage.getItem('savedSpots')).subscribe(data => {
      if(data !== this.selected){
        this.selected = data
        this.days = data["0"]['per-day-route']
        this.getDistance(this.days, this.distance)
        this.fireQuery(data["0"]['per-day-route'], this.selectDetails)
      }
    })
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

  shakeOff(){
    localStorage.setItem("savedSpots", this.savedSpots.join(','))
    window.location.reload()
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

}
