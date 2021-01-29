import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service';
import { StorageService } from 'src/app/services/storage.service';
import { AuthService } from 'src/app/services/auth.service';
import { AuthConstants } from 'src/app/config/auth-constants';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  postData={
    username:"",
    password:""
  };  

  constructor(private router: Router,private user:UserService, 
    private storageService: StorageService,  private authService: AuthService,
    private toastService: ToastService) { }
  // constructor(private router: Router,private user:UserService) { }
  // constructor(private router: Router) { }

  ngOnInit() {
  }

  validateInputs() {
    console.log(this.postData);
    let username = this.postData.username.trim();
    let password = this.postData.password.trim();
    return (
      this.postData.username &&
      this.postData.password &&
      username.length > 0 &&
      password.length > 0
    );
  }


  loginAction2(){
    // this.router.navigate(['home']);
    if (this.validateInputs()) {
      this.authService.login(this.postData).subscribe(
        (res: any) => {
          
          //var result=JSON.parse(res);
          if (res.success) {
            console.log(res);
            console.log(res.content[0].active);
            if(res.content[0].active == "1"){
                // Storing the User data.
              this.storageService
              .store(AuthConstants.AUTH, res.content[0])
              .then( r => {
                // console.log("login: "+res.content[0].role);
                // if(res.content[0].role == 'U' )
                //   this.router.navigate(['home-user/dashboard']); 
                
                // else  
                  this.router.navigate(['home/dashboard']);
              });
            }
            else{
              this.toastService.presentToast("Votre compte est désactivé. Contactez NR SOLAR !");
            }

           
          } else {
            //alert("incorrect username/password");
            this.toastService.presentToast("Erreur nom d'utilisateur/mot de passe");
          }
        },
        (error: any) => {
          //alert("cnx");
          this.toastService.presentToast('Probleme de connection.');
        }
      );
    } else {
      // alert("enter username/password");
      this.toastService.presentToast(
        "Entrer nom d'utilisateur/mot de passe."
      );
    }
  }


}
