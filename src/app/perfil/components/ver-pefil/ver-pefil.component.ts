import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../interfaces/user.interface';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-ver-pefil',
  templateUrl: './ver-pefil.component.html',
  styleUrls: ['./ver-pefil.component.scss']
})
export class VerPefilComponent implements OnInit {

  usuario: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private _userService: UsersService
  ) { 

    this.activeRoute.params
        .subscribe((res: any) => {
          // console.log(res)
          this.cargarUSuario(res.uid)
        })

  }

  ngOnInit(): void {
  }

  cargarUSuario(uid: string){

    // console.log(uid);
    this._userService.getUsuario(uid)
        .subscribe((res:any) => {
          this.usuario  = res.data();
        })


  }


}
