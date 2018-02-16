import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from './start/start.component';
import { SettingsComponent } from './settings/settings.component';
import { NewsComponent } from 'app/news/news.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'news/:id', component: NewsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
