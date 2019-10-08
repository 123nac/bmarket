import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { PestaniasComponent } from './pestanias/pestanias.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ListaBirrasComponent } from './lista-birras/lista-birras.component';
import { PanelBirraComponent } from './panel-birra/panel-birra.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSliderModule } from '@angular/material/slider';
import { CantSliderComponent } from './cant-slider/cant-slider.component';
import { MatTableModule } from '@angular/material/table';
import { TablaCarritoComponent } from './tabla-carrito/tabla-carrito.component';



@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    PestaniasComponent,
    PanelBirraComponent,
    ListaBirrasComponent,
    CantSliderComponent,
    TablaCarritoComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatExpansionModule,
    MatSliderModule,
    MatTableModule,
    MatBottomSheetModule,
  ],
  entryComponents: [
    PanelBirraComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
