import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { DetailsPage } from './home/details/details.page';


export const routes: Routes = [
 
  {
    path: '',
    component: HomePage,
    pathMatch: "full"
  },
  {
    path: 'details/:id', // Define a route with a parameter :id
    component: DetailsPage
  }
];



