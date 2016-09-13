import { RouterConfig } from '@angular/router';
import { nsProvideRouter } from 'nativescript-angular/router';

import {
  Page1Component, Page2Component
} from './pages';

const routes: RouterConfig = [
  //{ path: '', component: BlankComponent },
  { path: '', component: Page1Component },
  { path: 'page2', component: Page2Component }
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, { enableTracing: false })
];
