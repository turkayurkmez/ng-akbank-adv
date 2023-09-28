import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService  {

  isUserLoggedIn: boolean = false;
  returnUrl : string;

  constructor() { }

  checkUserIsLoggedIn(){
    if (localStorage.getItem('token') != null) {
      this.isUserLoggedIn = true;
    }

  }

  validateUser(username:string, password:string): boolean{
    if (username === 'turkay' && password ==="admin") {
      this.isUserLoggedIn = true;
      //not: API, JWT gönderiyorsa; bu token bilgisini aşağıdaki gibi kaydedin:
      let token = 'var sayın api gönderdi';
      localStorage.setItem("token",token);
      console.log('token kaydeildi...');
      return true;
    }
    return false;
  }

  logout(){
    localStorage.clear();
    this.isUserLoggedIn = false;
  }
}
