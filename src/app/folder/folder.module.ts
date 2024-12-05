import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { ChatComponent } from '../components/chat/chat.component';
import { NoticiasComponent } from '../components/noticias/noticias.component';
import { EventosComponent } from '../components/eventos/eventos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormatDatePipe } from '../format-date.pipe';
import { ClasesComponent } from '../components/clases/clases.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,HttpClientModule,FormatDatePipe
  ],
  declarations: [FolderPage,ChatComponent,NoticiasComponent,EventosComponent,ClasesComponent]
})
export class FolderPageModule {}
