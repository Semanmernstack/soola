import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonSearchbar, IonText, IonLabel, IonBackButton, IonCard, IonThumbnail, IonCol, IonRow, IonContent, IonImg, IonButtons } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonHeader, RouterLink, RouterOutlet, IonToolbar, IonButtons, IonThumbnail, IonSearchbar, IonText, IonLabel, IonCard, IonThumbnail, IonCol, IonImg, IonRow, IonTitle, IonContent, CommonModule]
})
export class DetailsPage implements OnInit {
  itemId: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.itemId = params['id'];
      console.log('Item ID:', this.itemId);
     
    });
  }

}
