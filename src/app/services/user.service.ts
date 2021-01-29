import { Injectable } from '@angular/core';
// import {ConfigService} from './config.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
    
  public login(username: string,password: string){
    return this.http.get(environment.apiUrl+"login.php?login="+username+"&password="+password, { "responseType": "text" });
  }
  
}
