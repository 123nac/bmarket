import { Injectable } from '@angular/core';
import { Birra } from '../clases/birra';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private lista_birras : Birra[] = [];
  private _carrito : any[] = [];
  private _carritoSubject: BehaviorSubject<any> = new BehaviorSubject(this._carrito);
  // public carrito: Observable<any> = this._carritoSubject.asObservable();
  

  constructor() { }

  obtenerCarrito() {
    return this._carritoSubject.asObservable();
  }

  agregarCarrito(birra : Birra, cant : number){
    let yaAgregada = false;
    let t = { nombre: birra.nombre, cantidad: cant, monto: birra.precio * cant}
    this.lista_birras.forEach((b : Birra) => {
      if (birra.nombre == b.nombre) {
        yaAgregada = true;
        this._carrito.forEach(_t => {
          if (t.nombre == birra.nombre) {
            _t.cantidad += cant;
            _t.monto = birra.precio * cant;
          }
        });
        // this._carrito[birra.nombre] += cant;
      }
    });
    if (!yaAgregada) {
      this.lista_birras.push(birra);
      this._carrito.push(t);
    }
    // console.log(this._carrito);
    this._carritoSubject.next(this._carrito);
  }
}
