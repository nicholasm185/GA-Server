import { Component, OnInit } from '@angular/core';
import { PythonHelperService } from '../services/python-helper.service'
import { PreferenceTrackerService } from '../services/preference-tracker.service';
import { FormGroup, FormControl, RequiredValidator, Validators, ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { isNull } from 'util';

@Component({
  selector: 'app-choose-tag-component',
  templateUrl: './choose-tag-component.component.html',
  styleUrls: ['./choose-tag-component.component.css']
})
export class ChooseTagComponentComponent implements OnInit {

  opt1 = ""
  opt2 = ""
  re = RegExp('-',"g")
  processing = 0

  preferenceForm = new FormGroup({
    preference : new FormControl('', [Validators.required])
  })

  constructor(private pythonService: PythonHelperService, private preferenceTrack: PreferenceTrackerService, public router: Router) { }

  ngOnInit(): void {
    this.preferenceTrack.getPreference()
    var x = this.preferenceTrack.getRandomOpts()
    this.opt1 = x[0]
    this.opt2 = x[1]
  }

  updatePreference(){
    if(this.preferenceForm.controls["preference"].value != ""){
      this.preferenceTrack.updatePreference(this.preferenceForm.controls["preference"].value)
      window.location.reload()
    } else{
      window.location.reload()
    }
    
  }

  getFinalValues5(){
    this.processing = 1
    var topTags = this.preferenceTrack.getTopTags()
    console.log(topTags)
    this.pythonService.postType5().subscribe(data => {
      localStorage.setItem('results', JSON.stringify(data))
      if(!isNull(localStorage.getItem('results'))){
        this.router.navigate(['/results'])
      }
    })
  }

  getFinalValues6(){
    this.processing = 1
    var topTags = this.preferenceTrack.getTopTags()
    console.log(topTags)
    this.pythonService.postType6(topTags).subscribe(data => {
      localStorage.setItem('results', JSON.stringify(data))
      if(!isNull(localStorage.getItem('results'))){
        this.router.navigate(['/results'])
      }
    })
  }

  getFinalValues7(){
    this.processing = 1
    var topTags = this.preferenceTrack.getTopTags()
    console.log(topTags)
    this.pythonService.postType7(topTags).subscribe(data => {
      localStorage.setItem('results', JSON.stringify(data))
      if(!isNull(localStorage.getItem('results'))){
        this.router.navigate(['/results'])
      }
    })
  }

  getFinalValues8(){
    this.processing = 1
    var topTags = this.preferenceTrack.getTopTags()
    console.log(topTags)
    this.pythonService.postType8(topTags).subscribe(data => {
      localStorage.setItem('results', JSON.stringify(data))
      if(!isNull(localStorage.getItem('results'))){
        this.router.navigate(['/results'])
      }
    })
  }

  hasPreferences(){
    if(isNull(localStorage.getItem("preference"))){
      return false
    } else{
      return true
    }
  }

  resetPreferences(){
    this.preferenceTrack.resetTags()
    window.location.reload()
  }

  requestResults(){

  }

}
