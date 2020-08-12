import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {

  exampleData = {
      "HTM": 2297400,
      "fitness": 2.876778008630323,
      "per-day-route": [
          [
              "Sain Belle Salon Mall Taman Anggrek Treatments",
              "Karaoke at Masterpiece KTV Tanjung Duren",
              "Jolly Fields Kota Kasablanka Tickets",
              "Swimming Pool at Cilandak Sport Center"
          ],
          [
              "The Observer Experience at Taman Mini Indonesia Indah Tickets",
              "Joanne Studio City Resort Beauty Treatments"
          ],
          [
              "Joanne Studio Dharmawangsa Beauty Treatments",
              "Happy Cars Mall Kelapa Gading",
              "Cutt'N Up Barbershop Binus Haircut Treatments"
          ]
      ],
      "route": " Sain Belle Salon Mall Taman Anggrek Treatments -> Karaoke at Masterpiece KTV Tanjung Duren -> Jolly Fields Kota Kasablanka Tickets -> Swimming Pool at Cilandak Sport Center -> The Observer Experience at Taman Mini Indonesia Indah Tickets -> Joanne Studio City Resort Beauty Treatments -> Joanne Studio Dharmawangsa Beauty Treatments -> Happy Cars Mall Kelapa Gading -> Cutt'N Up Barbershop Binus Haircut Treatments ->",
      "route-by-index": [
          0,
          5,
          6,
          8,
          4,
          7,
          2,
          1,
          3
      ],
      "spots": [
          "Sain Belle Salon Mall Taman Anggrek Treatments",
          "Happy Cars Mall Kelapa Gading",
          "Joanne Studio Dharmawangsa Beauty Treatments",
          "Cutt'N Up Barbershop Binus Haircut Treatments",
          "The Observer Experience at Taman Mini Indonesia Indah Tickets",
          "Karaoke at Masterpiece KTV Tanjung Duren",
          "Jolly Fields Kota Kasablanka Tickets",
          "Joanne Studio City Resort Beauty Treatments",
          "Swimming Pool at Cilandak Sport Center"
      ],
      "totalDist": 110156,
      "totalDuration": 30.218611111111112,
      "totalExpenses": 2987100.0,
      "travelDuration": 3.218611111111111,
      "travelExpenses": 689700.0
  }

  constructor() { }

  ngOnInit(): void {
  }

  getDays(){
    return this.exampleData["per-day-route"]
  }

}
