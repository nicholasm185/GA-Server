import { Component, OnInit } from '@angular/core';
import { PythonHelperService } from '../services/python-helper.service'
import { PreferenceTrackerService } from '../services/preference-tracker.service';
import { FormGroup, FormControl, RequiredValidator, Validators, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-choose-tag-component',
  templateUrl: './choose-tag-component.component.html',
  styleUrls: ['./choose-tag-component.component.css']
})
export class ChooseTagComponentComponent implements OnInit {

  opt1 = ""
  opt2 = ""

  preferenceForm = new FormGroup({
    preference : new FormControl('', [Validators.required])
  })

  constructor(pythonService: PythonHelperService, private preferenceTrack: PreferenceTrackerService) { }

  ngOnInit(): void {
    this.preferenceTrack.getPreference()
    var x = this.preferenceTrack.getRandomOpts()
    this.opt1 = x[0]
    this.opt2 = x[1]
  }

  updatePreference(){
    this.preferenceTrack.updatePreference(this.preferenceForm.controls["preference"].value)
    window.location.reload()
  }

  getFinalValues(){
    this.preferenceTrack.getTopTags()
  }

  resetPreferences(){
    this.preferenceTrack.resetTags()
    window.location.reload()
  }

}
