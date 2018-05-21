import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Article} from '../Models/Article';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  @Output() bottomReached: EventEmitter<void> = new EventEmitter<void>();
  articlesData: Article[] = [
    new Article('1@3x', 'Actu / Médias', 'Couple: est-ce ok de péter devant sa femme ?', '« Plaisir non partagé n’est plaisir qu’à moitié. »'),
    new Article('2@3x', 'Actu / Médias', 'Couple: est-ce ok de péter devant sa femme ?', '« Plaisir non partagé n’est plaisir qu’à moitié. »'),
    new Article('3@3x', 'Actu / Médias', 'Couple: est-ce ok de péter devant sa femme ?', '« Plaisir non partagé n’est plaisir qu’à moitié. »'),
    new Article('4@3x', 'Actu / Médias', 'Couple: est-ce ok de péter devant sa femme ?', '« Plaisir non partagé n’est plaisir qu’à moitié. »'),
    new Article('3@3x', 'Actu / Médias', 'Couple: est-ce ok de péter devant sa femme ?', '« Plaisir non partagé n’est plaisir qu’à moitié. »'),
    new Article('2@3x', 'Actu / Médias', 'Couple: est-ce ok de péter devant sa femme ?', '« Plaisir non partagé n’est plaisir qu’à moitié. »'),
    new Article('2@3x', 'Actu / Médias', 'Couple: est-ce ok de péter devant sa femme ?', '« Plaisir non partagé n’est plaisir qu’à moitié. »'),
    new Article('3@3x', 'Actu / Médias', 'Couple: est-ce ok de péter devant sa femme ?', '« Plaisir non partagé n’est plaisir qu’à moitié. »')
  ];
  constructor() { }

  ngOnInit() {
  }
  handleScroll(event) {
    let pos = event.srcElement.scrollTop + event.srcElement.offsetHeight;
    let max = event.srcElement.scrollHeight;
// that's for detect that the user reach the bottom of the page
    if (pos === max )   {
      this.bottomReached.emit();
    }
  }

}
