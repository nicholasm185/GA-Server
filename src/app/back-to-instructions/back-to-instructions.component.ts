import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-to-instructions',
  templateUrl: './back-to-instructions.component.html',
  styleUrls: ['./back-to-instructions.component.css']
})
export class BackToInstructionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
