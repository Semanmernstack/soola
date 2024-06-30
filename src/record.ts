export interface NewsItem {
    id: string;
    title: string;
    description: string;
    image: string;
    category: 'news' | 'sport' | 'entertainment';

}

export interface Metadata {
    createdAt: string;
    id: string;
    private: boolean;
    data: any; // Allow any additional data
    record: any;
  }