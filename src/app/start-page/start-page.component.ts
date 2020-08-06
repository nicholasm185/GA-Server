import { Component, OnInit } from '@angular/core';
import { PythonHelperService } from '../services/python-helper.service'

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private pythonService : PythonHelperService) { }

  ngOnInit(): void {
  }

  getTest(){
    this.pythonService.getTest().subscribe(data => {
      console.log(data)
    })
  }

  getDefault(){
    this.pythonService.getDefTest().subscribe(data => {
      console.log(data)
    })
  }

}
