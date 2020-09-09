import { Component, OnInit, Type } from '@angular/core';
import { PythonHelperService } from '../services/python-helper.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-results-page',
  templateUrl: './new-results-page.component.html',
  styleUrls: ['./new-results-page.component.css'],
})
export class NewResultsPageComponent implements OnInit {

  constructor(private pythonService: PythonHelperService, private db: AngularFirestore, public router: Router) { }

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
  
  selectDetails = {}

  testTags = "museum,beach,art-and-culture"

  ngOnInit(): void {
    this.pythonService.postType8(this.testTags).subscribe(data => {
      if(data !== this.TypeAResults){
        this.TypeAResults = data
        this.daysA = data["0"]['per-day-route']
        this.fireQuery(data["0"]['per-day-route'], this.detailsA)
      }
    })
    this.pythonService.postType5().subscribe(data => {
      if(data !== this.TypeBResults){
        this.TypeBResults = data
        this.daysB = data["0"]['per-day-route']
        this.fireQuery(data["0"]['per-day-route'], this.detailsB)
      }
    })
  }

  swithSelected(type: string){
    if (type == "a") {
      this.selected = this.TypeAResults
      this.selectDetails = this.detailsA
      this.days = this.daysA
    } else if (type == "b") {
      this.selected = this.TypeBResults
      this.selectDetails = this.detailsB
      this.days = this.daysB
    }
    console.log(this.selected)
    console.log(this.selectDetails)
    console.log(this.days)
  }

testRefresh(){
  this.selected = this.TypeAResults
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

resetAll(){
  localStorage.clear()
  this.router.navigate(['/start'])
}

}
