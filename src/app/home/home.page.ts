import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonSearchbar, IonText, IonLabel, IonCard, IonThumbnail, IonCol, IonRow, IonContent, IonImg } from '@ionic/angular/standalone';
import { ArrayService } from '../services/array.service';
import { CommonModule, NgFor } from '@angular/common';
import { JsonService } from '../services/json.service';
import {  Metadata, NewsItem } from 'src/record';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonThumbnail, IonSearchbar, IonText, IonLabel, IonCard, IonThumbnail, IonCol, IonImg, IonRow, IonTitle, IonContent, CommonModule, NgFor],
})

 
export class HomePage implements OnInit {
  private api  = inject(ArrayService)
  
  constructor(private jsonService: JsonService) {}
   
  items: any[] = []
  allItems: any[] = []
  newsItems: any[] = []

  ngOnInit() {
   
    this.getItems()
    this.homeList()
    
    
  }
   
  
  
  getItems() {
    this.allItems = [this.api.items]
    this.items = [...this.allItems]
  }

  homeList() {
    this.jsonService.getNews().subscribe((data: Metadata )=> {
      this.newsItems = data?.record?.data;
      console.log(data)
     
    },
   
  
  )
  }
}
