import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { LoaderService } from 'src/app/services/loader.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  constructor(public modalController: ModalController, private authService: AuthService, 
    private toastService: ToastService, private alertController: AlertController, private ionLoader: LoaderService) { 

  }


  ionViewDidEnter(){
    
}

  ngOnInit() {
  }

  
}
