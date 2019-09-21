import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-birras',
  templateUrl: './lista-birras.component.html',
  styleUrls: ['./lista-birras.component.scss']
})
export class ListaBirrasComponent implements OnInit {
  tiposDeBirras: string[] = ['Golden ALE', 'IPA', 'Foreing STOUT', 'Colonia Suiza', 'Ninas Pumpkin ALE'];
  constructor() { }

  ngOnInit() {
  }

}
