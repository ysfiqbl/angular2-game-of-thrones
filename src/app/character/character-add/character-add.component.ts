import { Component, OnInit } from '@angular/core';

import { Character } from '../character';

@Component({
  selector: 'app-character-add',
  templateUrl: './character-add.component.html',
  styleUrls: ['./character-add.component.css']
})
export class CharacterAddComponent implements OnInit {

  character: Character;

  constructor() { 
    this.character = new Character();
  }

  ngOnInit() {
  }

  add() {
    console.log(this.character);
  }

}
