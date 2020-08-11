import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { ChooseTagComponentComponent } from './choose-tag-component/choose-tag-component.component';
import { CheckConstraintsGuard } from './check-constraints.guard';


const routes: Routes = [
  {path: '', component: StartPageComponent},
  {path: 'pickTags', component: ChooseTagComponentComponent
  // ,canActivate: [CheckConstraintsGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
