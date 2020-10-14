import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { ChooseTagComponentComponent } from './choose-tag-component/choose-tag-component.component';
import { CheckConstraintsGuard } from './check-constraints.guard';
import { ResultsPageComponent } from './results-page/results-page.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { NewResultsPageComponent } from './new-results-page/new-results-page.component';
import { ShookResultsPageComponent } from './shook-results-page/shook-results-page.component';
import { ConsentFormPageComponent } from './consent-form-page/consent-form-page.component';


const routes: Routes = [
  {path: '', component: IntroPageComponent},
  {path: 'start', component: StartPageComponent},
  {path: 'consentForm', component: ConsentFormPageComponent},
  {path: 'pickTags', component: ChooseTagComponentComponent
  ,canActivate: [CheckConstraintsGuard]
  },
  {path: 'newResults', component: NewResultsPageComponent
  ,canActivate: [CheckConstraintsGuard]}
  ,
  {path: 'shookResults', component: ShookResultsPageComponent
  ,canActivate: [CheckConstraintsGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
