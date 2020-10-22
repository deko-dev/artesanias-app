import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from '../../../services/producto.service';


@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']
})
export class EditarProductoComponent implements OnInit {

  uid: string;
  idprod: string;
  nuevo: boolean;
  productoForm: FormGroup;
  productoSelected: Producto;
  productoImg: any;
  
  constructor(
    private activateRoute:ActivatedRoute, 
    private formBuilder: FormBuilder,
    private _productoService: ProductoService
  ) { 
    
    this.uid = this.activateRoute.snapshot.paramMap.get('uid');
    this.idprod = this.activateRoute.snapshot.paramMap.get('idprod');
    this.activateRoute.url
        .subscribe((res) => {
          if(res[0].path === 'new'){
            this.nuevo = true
          } else if(res[0].path === 'edit'){
            this.nuevo = false
            this._productoService.getProducto(this.idprod)
              .subscribe((res:any)=>{
                this.cargarData(res.data())
              })
          }
        })  

    this.crearFormulario();   
        console.log(this._productoService.subiendo);     
  }

  ngOnInit(): void {
    console.log(this.idprod);
  }

  crearFormulario(){
    this.productoForm = this.formBuilder.group({
      id: [''],
      nombre: [''],
      desc: [''],
      precio: [''],
      imagen: ['']
    })
  }

  guardar(){
    this.productoSelected = this.productoForm.value;
    this.productoSelected.uidUser = this.uid;
    
    console.log(this.productoForm);
    console.log(this.productoForm.value);
    
    this._productoService.guardarProducto(this.productoSelected, this.productoImg);



  }

  probandoImg(event){
    this.productoImg = event;
  }

  cargarData(producto : Producto){
    
    this.productoForm = this.formBuilder.group({
      id: [producto.id],
      nombre: [producto.nombre],
      desc: [producto.desc],
      precio: [producto.precio],
      imagen: [producto.imagen]
    })
  } 

}
