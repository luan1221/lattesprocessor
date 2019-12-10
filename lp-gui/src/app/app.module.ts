import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { NavbarComponent } from './navbar/navbar.component';
import { PesquisadorService } from './pesquisador/pesquisador.service';
import { ImportLattesComponent } from './pesquisador/importLattes.component';

import { QualisComponent } from './qualis/qualis.component'
import { QualisService } from './qualis/qualis.service';
// add project imports

@NgModule({
  declarations: [
    AppComponent,
    QualisComponent,
    NavbarComponent,
    ImportLattesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot([
      {
        path: 'pesquisadores',
        component: ImportLattesComponent
      },
      {
        path: 'qualis',
        component: QualisComponent
      }
    ]), BrowserAnimationsModule
  ],
  providers: [QualisService, PesquisadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
