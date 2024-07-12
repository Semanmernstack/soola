import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { DetailsPage } from './home/details/details.page';
import { AddFormComponent } from './add-form/add-form.component';


export const routes: Routes = [
 
  {
    path: '',
    component: HomePage,
    pathMatch: "full"
  },
  {
    path: 'details-page/:id', 
    component: DetailsPage
  },
  {
    path: 'add-form-page',
    component: AddFormComponent
  }
  
];



