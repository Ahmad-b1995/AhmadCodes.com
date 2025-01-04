interface ArticleImage {
    alt: string;
    src: string;
    width: number;
    height: number;
  }
  
  interface Article {
    id: number;
    title: string;
    description: string;
    image: ArticleImage;
  }