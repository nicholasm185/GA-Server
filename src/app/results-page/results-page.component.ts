import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-results-page',
    templateUrl: './results-page.component.html',
    styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {

    data = {}
    re = RegExp(' ',"g")
    
    constructor() { }

    ngOnInit(): void {
        this.data = JSON.parse(localStorage.getItem('results'))
        console.log(this.data)
    }

    getDays(){
        return this.data["0"]['per-day-route']
    }

}
