import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Tour The Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect (hero: Hero): void {
    this.selectedHero = hero;
  }

};


export class Hero {
  id: number;
  name: string;
}


const HEROES: Hero[] = [
  { id:  1,   name: 'Iron Man' },
  { id:  2,   name: 'Ninja Turles' },
  { id:  3,   name: 'Harley Quinn' },
  { id:  4,   name: 'Joker' },
  { id:  5,   name: 'Ganta' },
  { id:  6,   name: 'Todoroki' },
  { id:  7,   name: 'All Might' },
  { id:  8,   name: 'Inferno' },
];
