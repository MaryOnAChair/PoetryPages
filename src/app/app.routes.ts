import { Routes } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {PoetryGardenComponent} from './components/poetry-garden/poetry-garden.component';
import {LovePoemsComponent} from './components/love-poems/love-poems.component';
import {SadPoemsComponent} from './components/sad-poems/sad-poems.component';
import {NightPoemsComponent} from './components/night-poems/night-poems.component';
import {GrowthPoemsComponent} from './components/growth-poems/growth-poems.component';
import {HappinessPoemsComponent} from './components/happiness-poems/happiness-poems.component';
import {NaturePoemsComponent} from './components/nature-poems/nature-poems.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'lovePoems', component: LovePoemsComponent },
  { path: 'sadPoems', component: SadPoemsComponent },
  { path: 'nightPoems', component: NightPoemsComponent },
  { path: 'growthPoems', component: GrowthPoemsComponent },
  { path: 'happinessPoems', component: HappinessPoemsComponent },
  { path: 'naturePoems', component: NaturePoemsComponent },



];
