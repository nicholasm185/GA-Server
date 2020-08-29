import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';
import { take, first } from 'rxjs/operators';
import { isNull, isUndefined } from 'util';

@Component({
    selector: 'app-results-page',
    templateUrl: './results-page.component.html',
    styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {

    data = {}
    re = RegExp(' ',"g")
    details = {}
    
    constructor(private db: AngularFirestore) { }

    ngOnInit(): void {
        this.data = JSON.parse(localStorage.getItem('results'))
        // console.log(this.data)
        this.fireQuery(this.getDays())
        console.log(this.details)
    }

    getDays(){
        return this.data["0"]['per-day-route']
    }


    fireQuery(dRoute){
        for(let x of dRoute){
            for(let y of x ){
                console.log(y)
                this.db.collection('POI', ref => ref.where('name', '>=', y).limit(1)).valueChanges().subscribe(data => {
                    this.details[y] = data[0]
                })
            }
        }
    }

}
