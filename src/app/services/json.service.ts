import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {Metadata,  NewsItem } from 'src/record';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JsonService {
  private apiUrl = 'https://api.jsonbin.io/v3/b/6690e747ad19ca34f886771e';
  private apiKey = '$2a$10$ej6tihPN8FYiAQmkJjmlpO5ZW0MBk5SI7EPO3R5XhI/ko/x.yF1Qe';
  
  private headers= new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Master-Key': this.apiKey
    
    })
  
  
  constructor(private http: HttpClient) {}
  
  getNews(): Observable<Metadata> {
    return this.http.get<Metadata>(this.apiUrl + '/latest' , {headers: this.headers}  );
  }
 

  // Create a new news item
  createNews(newsItem: NewsItem): Observable<any> {
    return this.http.put(this.apiUrl, newsItem, {headers: this.headers} ) 
    
  }

  // Update an existing news item
  updateNews(newsItem: NewsItem): Observable<NewsItem> {
    return this.http.put<NewsItem>(`${this.apiUrl}/${newsItem.id}`, {headers: this.headers} );
  }

  // Delete a news item
  deleteNews(newsId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${newsId}`);
  }
}






