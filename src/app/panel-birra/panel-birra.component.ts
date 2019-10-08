import { Component, Inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Birra } from '../clases/birra';

@Component({
  selector: 'app-panel-birra',
  templateUrl: './panel-birra.component.html',
  styleUrls: ['./panel-birra.component.scss'],
})
export class PanelBirraComponent {

  public birra : Birra;

  constructor(private _bottomSheetRef: MatBottomSheetRef<PanelBirraComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
      this.birra = data.birra;
    }
  
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
