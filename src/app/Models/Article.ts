export class Article {
  imageSrc: string;
  articleTitle: string;
  articleContent: string;
  articleFooter: string;
  constructor(img, title, content, footer) {
    this.imageSrc = img;
    this.articleContent = content;
    this.articleTitle = title;
    this.articleFooter = footer;
  }
}
