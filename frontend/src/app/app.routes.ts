import { Routes } from '@angular/router';
import { ClientesListaComponent } from './pages/clientes-lista/clientes-lista';
import { ClientesFormComponent } from './pages/clientes-form/clientes-form';

export const routes: Routes = [
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
  { path: 'clientes', component: ClientesListaComponent },
  { path: 'clientes/novo', component: ClientesFormComponent },
  { path: '**', redirectTo: 'clientes' }
];
