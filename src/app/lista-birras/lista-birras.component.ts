import { Component, OnInit } from '@angular/core';
import { Birra } from '../clases/birra';
import { BIRRAS } from "../mocks/mocks";

@Component({
  selector: 'app-lista-birras',
  templateUrl: './lista-birras.component.html',
  styleUrls: ['./lista-birras.component.scss']
})
export class ListaBirrasComponent implements OnInit {
  public birras: Birra[];

  
  constructor() { 
  }

  ngOnInit() {
    this.birras = BIRRAS;
  }

}
