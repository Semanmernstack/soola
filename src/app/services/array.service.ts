import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  items: any[]=  [
    {
      id: '1',
      name: 'page1',
      url: 'page1-url',
      content: 'Content for page 1',
      title: 'Page 1 Title'
    },
    {
      id: '2',
      name: 'page2',
      url: 'page2-url',
      content: 'Content for page 2',
      title: 'Page 2 Title'
    },
    {
      id: '3',
      name: 'page3',
      url: 'page3-url',
      content: 'Content for page 3',
      title: 'Page 3 Title'
    },
    // Add more objects as needed
  ];

  constructor() { }
}
