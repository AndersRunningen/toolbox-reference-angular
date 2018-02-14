/**
 * Created by orjanertkjern on 24/04/2017.
 */

import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ErrorComponent} from './error/error.component';
import {NavigationDestinationComponent} from './navigation-destination/navigation-destination.component';
import {FormGroupComponent} from './form-group/form-group.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'navigate',
    component: NavigationDestinationComponent
  },
  {
    path: 'form',
    component: FormGroupComponent
  },
  {
    path: '**',
    component: ErrorComponent
  },
];

export let AppRouterModule = RouterModule.forRoot(APP_ROUTES, {useHash: false});

