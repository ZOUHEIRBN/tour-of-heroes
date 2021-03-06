import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './mock/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
