import { Component, OnInit, ViewChild } from '@angular/core';
import { CarritoService } from '../servicios/carrito.service';



@Component({
  selector: 'app-tabla-carrito',
  templateUrl: './tabla-carrito.component.html',
  styleUrls: ['./tabla-carrito.component.scss']
})
export class TablaCarritoComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'cantidad', 'monto'];
  transactions: any[] = [];


  /** Gets the total cost of all transactions. */
  getMontoTotal() {
    // return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    let total = 0;
    this.transactions.forEach(t => {
      total += t.monto;
    });
    return total;
  }
  getCantidadTotal() {
    // return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    let total = 0;
    this.transactions.forEach(t => {
      total += t.cantidad;
    });
    return total;
  }

  constructor(private carrito_service : CarritoService) { }

  ngOnInit() {

    this.carrito_service.obtenerCarrito().subscribe(items => {
      this.transactions = items;
    });
  }

}
