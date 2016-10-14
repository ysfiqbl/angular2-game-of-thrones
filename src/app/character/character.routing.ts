import { ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { CharacterAddComponent } from './character-add/character-add.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterEditComponent } from './character-edit/character-edit.component';

const routes: Routes = [
	{
		path: 'characters',
		component: CharacterListComponent
	},
	{
		path: 'characters/add',
		component: CharacterAddComponent
	},
	{
		path: 'characters/:id',
		component: CharacterDetailComponent
	},
	{
		path: 'characters/edit/:id',
		component: CharacterEditComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);