import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  public title:string = '--title--'; //Esto es una base de datis
  public counter:number  = 10;

  increaseBy(value:number):void {
    this.counter += value;
  }
  resetCounter():void{
    this.counter = 10;
  }
}
