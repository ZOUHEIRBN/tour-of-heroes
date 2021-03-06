import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock/mock-heroes'
import { Hero } from './hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    console.log(this.selectedHero);

  }
  ngOnInit(): void {

  }

}
