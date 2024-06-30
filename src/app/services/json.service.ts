import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Metadata, NewsItem } from 'src/record';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  private apiUrl = 'https://api.jsonbin.io/v3/b/66811e3bacd3cb34a85f50a8/latest'; // Replace with your JSONBin API endpoint
  private apiKey = '$2a$10$ej6tihPN8FYiAQmkJjmlpO5ZW0MBk5SI7EPO3R5XhI/ko/x.yF1Qe';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'secret-key': '$2a$10$ej6tihPN8FYiAQmkJjmlpO5ZW0MBk5SI7EPO3R5XhI/ko/x.yF1Qe'// Replace with your JSONBin secret key
    })
  };
  
  constructor(private http: HttpClient) {}
  
  getNews(): Observable<Metadata> {
    return this.http.get<Metadata>(`${this.apiUrl}`, this.httpOptions);
  }
 

  // Create a new news item
  createNews(newsItem: NewsItem): Observable<NewsItem> {
    return this.http.post<NewsItem>(`${this.apiUrl}`, this.httpOptions);
  }

  // Update an existing news item
  updateNews(newsItem: NewsItem): Observable<NewsItem> {
    return this.http.put<NewsItem>(`${this.apiUrl}/${newsItem.id}`, this.httpOptions);
  }

  // Delete a news item
  deleteNews(newsId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${newsId}`);
  }
}






