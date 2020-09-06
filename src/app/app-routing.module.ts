import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { ChooseTagComponentComponent } from './choose-tag-component/choose-tag-component.component';
import { CheckConstraintsGuard } from './check-constraints.guard';
import { ResultsPageComponent } from './results-page/results-page.component';
import { IntroPageComponent } from './intro-page/intro-page.component';


const routes: Routes = [
  {path: '', component: IntroPageComponent},
  {path: 'start', component: StartPageComponent},
  {path: 'pickTags', component: ChooseTagComponentComponent
  ,canActivate: [CheckConstraintsGuard]
  },
  {path: 'results', component: ResultsPageComponent
  ,canActivate: [CheckConstraintsGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
