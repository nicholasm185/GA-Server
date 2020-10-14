import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { PythonHelperService } from '../services/python-helper.service';

@Component({
  selector: 'app-consent-form-page',
  templateUrl: './consent-form-page.component.html',
  styleUrls: ['./consent-form-page.component.css']
})
export class ConsentFormPageComponent implements OnInit {
  marked = false;
  name = new FormControl('', [Validators.required]);


  constructor(private pythonService: PythonHelperService, private router: Router) { }

  ngOnInit(): void {
  }

  toggleMarked(e){
    this.marked = e.target.checked
  }

  goToNext(){
    this.pythonService.recordConsent(this.name.value).subscribe(data => {
      if(data != null){
        console.log(data)
        this.router.navigate(["/start"])
      }
    })

  }


}
