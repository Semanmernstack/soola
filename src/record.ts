

//export interface Metadata {
    //createdAt: string;
    //id: string;
    //private: boolean;
    //data: any; 
    //record: any;
   // data: NewsItem[];
 // }
 export interface NewsItem {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
  }
  
  
  
  
  export interface Metadata {
    id: string;
    private: boolean;
    createdAt: string;
    record: any;
    data: NewsItem[];
  }
  
  
  