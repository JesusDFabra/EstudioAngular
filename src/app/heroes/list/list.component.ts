import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Hulk','Thor','Black Panther','American Captain'];
  public heroDeleted?:string;

  removeLastHero() :void{
    if(this.heroNames.length > 0){
      this.heroDeleted = this.heroNames.pop();
    }
    else{
      this.heroDeleted = 'All heros was deleted';
    }
  }
}
