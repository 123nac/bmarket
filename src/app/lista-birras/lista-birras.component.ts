import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-birras',
  templateUrl: './lista-birras.component.html',
  styleUrls: ['./lista-birras.component.scss']
})
export class ListaBirrasComponent implements OnInit {
  public birras = [ {
    nombre: 'Golden ALE',
    estilo: 'ALE',
    precio: 100,
    avatar: "../../assets/carta_berlina_patagonia_golden_ale_2019_avatar.jpg",
    stock: 20,
  }, {
    nombre: 'IPA',
    estilo: 'IPA',
    precio: 100,
    avatar: "../../assets/carta_berlina_patagonia_golden_ale_2019_avatar.jpg",
    stock: 20,
  },{
    nombre: 'Foreing STOUT',
    estilo: 'STOUT',
    precio: 100,
    avatar: "../../assets/carta_berlina_patagonia_golden_ale_2019_avatar.jpg",
    stock: 20,
  }, {
    nombre: 'Colonia Suiza',
    estilo: 'Estilo',
    precio: 100,
    avatar: "../../assets/carta_berlina_patagonia_golden_ale_2019_avatar.jpg",
    stock: 0,
  } , {
    nombre: 'Ninas Pumpkin ALE',
    estilo: 'ALE',
    precio: 100,
    avatar: "../../assets/carta_berlina_patagonia_golden_ale_2019_avatar.jpg",
    stock: 20,
  }];

  constructor() { }

  ngOnInit() {
  }

}
