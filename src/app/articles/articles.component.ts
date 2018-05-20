import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {Article} from '../Models/Article';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, AfterViewInit {

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
  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

}
