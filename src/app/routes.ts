import { Routes } from "@angular/router";
import { Error404Component } from "@shared/components/error404/error404.component";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@modules/invoices/invoices.module').then(m => m.InvoicesModule)
  },
  {
    path: '**',
    component: Error404Component
  }
];