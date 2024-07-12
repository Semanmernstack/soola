import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonSearchbar, IonText, IonLabel, IonCard, IonThumbnail, IonItem, IonCol, IonRow, IonContent, IonImg } from '@ionic/angular/standalone';
import { ArrayService } from '../services/array.service';
import { CommonModule, NgFor } from '@angular/common';
import { JsonService } from '../services/json.service';
import {  Metadata, NewsItem } from 'src/record';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, RouterLink, RouterOutlet, IonToolbar, IonThumbnail, IonSearchbar, IonItem, IonText, IonLabel, IonCard, IonThumbnail, IonCol, IonImg, IonRow, IonTitle, IonContent, CommonModule, NgFor],
})

 
export class HomePage implements OnInit {
  private api  = inject(ArrayService)
  
  constructor(private jsonService: JsonService) {}
  metaData: any;
  items: any[] = []
  allItems: any[] = []
  newsItem: NewsItem[] = [] 


  ngOnInit() {
   
    this.homeList()
  }
   

  homeList() {
    this.jsonService.getNews().subscribe((data: Metadata)=> {
      
      this.newsItem = data?.record?.data
      console.log(data)
     
    },
   
  
  )
  }
}
