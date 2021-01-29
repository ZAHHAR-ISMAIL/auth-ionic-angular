import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../config/auth-constants';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  constructor(public storageService: StorageService, public router: Router) {}
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.storageService
        .get(AuthConstants.AUTH)
        .then(res => {
          if (res) 
          {
            console.log(res.role); 
            // If the user is not admin
            // if(res.role == "U")
            // { 
            //   this.router.navigate(['home-user']);
            //   resolve(true);
            // }
              
            // else 
              resolve(true);
            
          } else {
            this.router.navigate(['login']);
            resolve(false);
          }
        })
        .catch(err => {
          resolve(false);
        });
    });
  }
  
}
