import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Metadata, NewsItem } from 'src/record';
import { CommonModule, NgFor } from '@angular/common';
import { JsonService } from '../services/json.service';
import { IonHeader, IonToolbar, IonTitle, IonSearchbar, IonText, IonLabel, IonCard, IonTextarea, IonInput,  IonThumbnail, IonItem, IonCol, IonRow, IonButton,  IonImg } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
  schemas: [NO_ERRORS_SCHEMA],
  standalone: true,
  imports: [FormsModule,  IonHeader, IonToolbar, IonTextarea, IonThumbnail, IonInput, IonSearchbar, IonItem, IonText, IonLabel, IonButton, IonCard, IonThumbnail, IonCol, IonImg, IonRow, IonTitle, CommonModule]
})
export class AddFormComponent  implements OnInit{
  newsItem: NewsItem = {
    id: '',
    title: '',
    description: '',
    image: '',
    category: '',
    
    
  };
  
  constructor(private router: Router, private navCtrl: NavController, private jsonService: JsonService) { }

  ngOnInit() {
   
  }
 
  createBlog () {
   this.jsonService.createNews(this.newsItem).subscribe((data: any) => {
    if(data.record.data) {
      alert('hhhh')
    }
    //this.newsItem = data?.record?.data;
     //this.navCtrl.navigateRoot('/home');
    //this.router.navigate(['/home']);
     
    })
  }

}

