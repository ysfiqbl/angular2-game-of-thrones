import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterComponent } from './character.component';
import { CharacterAddComponent } from './character-add/character-add.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterEditComponent } from './character-edit/character-edit.component';

import { routing } from './character.routing';

@NgModule({
	imports: [
		CommonModule,
		routing
	],
	declarations: [
		CharacterComponent,
		CharacterAddComponent,
		CharacterListComponent,
		CharacterDetailComponent,
		CharacterEditComponent
	]
})

export class CharacterModule {}