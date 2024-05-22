import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiDirectivaDirective } from './mi-directiva.directive';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GaleriaComponent } from './galeria/galeria.component';
import { ItemGaleriaComponent } from './item-galeria/item-galeria.component';

import { RouterModule, Routes } from '@angular/router'; // Importa RouterModule y Routes
const routes: Routes = [
  { path: 'galeria', component: GaleriaComponent },
  { path: '', component: FormularioComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MiDirectivaDirective,
    FormularioComponent,
    GaleriaComponent,
    ItemGaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
