import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../interfaces/user.interface';
import { AuthService } from '../../../services/auth.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logeado = false;
  user;
  principal = false;

  constructor(
    private _authService: AuthService,
    private _usersService: UsersService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { 
    this._authService.auth.authState
                    .subscribe( (user) => {
                      if( !user ){
                        this.logeado = false
                        return;
                      } else {
                        this.logeado = true
                        this.user = user;
                      }
                    })
        
  this.router.events
      .subscribe((res) => {

        if(this.router.url === '/'){
          this.principal = true;
        } else {
          this.principal = false;
        }
      })
  }

  ngOnInit(): void {}

  login(){
   this._authService.login();
  }


  logout(){
    this._authService.logout()
        .then((response)=> {
          response;
          this.logeado = false;
          this.router.navigate(['/']);
        })
        .catch((error)=> {
          console.error( "Error al salir", error );
        })
  }

}
