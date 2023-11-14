import { Route } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'demo',
        loadComponent: () => import('./pages/demo/demo.component').then(x => x.DemoComponent)
    }
];
