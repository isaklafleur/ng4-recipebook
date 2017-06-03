import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Carrot Jummy',
      'nice carrot pie',
      'http://everydaygoodthinking.com/wp-content/uploads/2015/04/Carrot-Pie-Hamilton-Beach-01.jpg'
      ),
new Recipe(
      'Carrot Jummy',
      'nice carrot pie',
      'http://everydaygoodthinking.com/wp-content/uploads/2015/04/Carrot-Pie-Hamilton-Beach-01.jpg'
      )
  ];

  constructor() { }

  ngOnInit() {
  }

}
