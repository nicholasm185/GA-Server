import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PythonHelperService } from './services/python-helper.service'

@Injectable({
  providedIn: 'root'
})
export class CheckConstraintsGuard implements CanActivate {

  constructor(private pythonService : PythonHelperService, private router: Router){}

  canActivate(): boolean {
    if(this.pythonService.isParamsSet()){
      return true
    } else{
      this.router.navigate(['/'])
    }
  }
  
}
