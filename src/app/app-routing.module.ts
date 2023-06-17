import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EscritosComponent } from './components/escritos/escritos.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'escritos', component: EscritosComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
