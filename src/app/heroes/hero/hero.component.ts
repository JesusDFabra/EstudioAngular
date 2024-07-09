import { Component } from '@angular/core';

@Component({
  //app-hero-list
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})


export class HeroComponent {
  public name: string = 'Iron Man';
  public age: number = 45;

  get capitalizedNane():string{
    return this.name.toUpperCase();
  }

  GetHeroDescription ():string{
    this.capitalizedNane;
    return `${this.name} is ${this.age} years old.`
  }

  changeName(newName:string):void{
    this.name = newName;
  }
  changeAge(newAge:number):void{
    this.age = newAge;
  }
  ResetHero():void{
    //this.name = 'Iron Man';
    this.age = 45;
    document.querySelectorAll('h1')!.forEach( element => {
      element.innerHTML = '<h1>Msg desde Angular</h1>';
    })
  }
}
