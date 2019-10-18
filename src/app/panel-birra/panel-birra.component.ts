import { Component, Inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Birra } from '../clases/birra';
import { CarritoService } from '../servicios/carrito.service';

@Component({
  selector: 'app-panel-birra',
  templateUrl: './panel-birra.component.html',
  styleUrls: ['./panel-birra.component.scss'],
})
export class PanelBirraComponent {

  public birra : Birra;

  cantidad : number;

  constructor(private _bottomSheetRef: MatBottomSheetRef<PanelBirraComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private carrito : CarritoService) {
      this.birra = data.birra;
      this.cantidad  = this.birra.stock;
    }
  
  actualizarCantidad(cant : number){
    this.cantidad = cant;
    console.log(cant);
  }
  
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  agregarCarrito(){
    this.carrito.agregarCarrito(this.birra, this.cantidad);
    this.birra.stock -= this.cantidad;
    this.cantidad = this.birra.stock;
    console.log(this.birra.stock);
  }

}
