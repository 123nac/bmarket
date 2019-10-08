import { Component, OnInit } from '@angular/core';
import { Birra } from '../clases/birra';
import { BIRRAS } from "../mocks/mocks";
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PanelBirraComponent } from '../panel-birra/panel-birra.component';

@Component({
  selector: 'app-lista-birras',
  templateUrl: './lista-birras.component.html',
  styleUrls: ['./lista-birras.component.scss']
})
export class ListaBirrasComponent implements OnInit {
  public birras: Birra[];

  constructor(private _bottomSheet: MatBottomSheet) { 
  }
  
  abrirPanel(birra : Birra): void {
      this._bottomSheet.open(PanelBirraComponent,  {
        data: { birra: birra },
      });
  }

  ngOnInit() {
    this.birras = BIRRAS;
  }

}
