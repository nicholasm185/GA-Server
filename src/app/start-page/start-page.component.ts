import { Component, OnInit } from '@angular/core';
import { PythonHelperService } from '../services/python-helper.service'
import { FormGroup, FormControl, RequiredValidator, Validators, ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constraintsForm = new FormGroup({
    budget: new FormControl('', [Validators.required, Validators.min(100000)]),
    duration: new FormControl('', [Validators.required, Validators.min(1)]),
    noPerson: new FormControl('', [Validators.required, Validators.min(1)])
  });

  constructor(private pythonService : PythonHelperService, private router: Router) { }

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

  updateConstraints(){
    this.pythonService.getConstraints()
    console.log(this.constraintsForm.value)
    this.pythonService.updateConstraints(
      this.constraintsForm.controls['budget'].value,
      this.constraintsForm.controls['duration'].value,
      this.constraintsForm.controls['noPerson'].value
    )
    this.router.navigate(['/pickTags'])
  }

}
