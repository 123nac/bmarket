import { Component, OnInit } from '@angular/core';
import { Birra } from '../clases/birra';
// import { BIRRAS } from "../mocks/mocks";
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PanelBirraComponent } from '../panel-birra/panel-birra.component';
import { BirraDataService } from '../servicios/birra-data.service';

@Component({
  selector: 'app-lista-birras',
  templateUrl: './lista-birras.component.html',
  styleUrls: ['./lista-birras.component.scss']
})
export class ListaBirrasComponent implements OnInit {
  
  public birras: Birra[];

  constructor(private _bottomSheet: MatBottomSheet,
              private servicioBirras : BirraDataService) {
  }
  
  abrirPanel(birra : Birra): void {
      this._bottomSheet.open(PanelBirraComponent,  {
        data: { birra: birra },
      });
  }

  ngOnInit() {
    this.birras = this.servicioBirras.getBirras();

    // Prueba firebase
    // let servicioBirras = new BirraDataService();
    // let data = this.servicioBirras.getBirras().subscribe();
    // for (const key in data) {
    //   if (data.hasOwnProperty(key)) {
    //     const element = data[key];
    //     this.birras.push(element);
    //   }
    // } 
  }

}
