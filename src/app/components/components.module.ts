import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [SlidesComponent, StartComponent, LogoComponent, CardsComponent],
  exports: [SlidesComponent, StartComponent, LogoComponent, CardsComponent], 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class ComponentsModule { }
