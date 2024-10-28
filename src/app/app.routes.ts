import { Routes } from '@angular/router';
import { TodosPageComponent } from './components/todos-page/todos-page.component';
import { AboutPageComponent } from './about/about-page/about-page.component';

export const routes: Routes = [
  { path: 'todos/:status', component: TodosPageComponent },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  },
  { path: '**', redirectTo: '/todos/all', pathMatch: 'full' },
];
