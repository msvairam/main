import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [{
    path: '', loadComponent: () => import('./app.component').then(m => m.AppComponent),
    pathMatch: 'full'
},
{
    path: 'flight', loadComponent: () => 
        loadRemoteModule({
            type: "module",
            remoteEntry:  'http://localhost:4201/remoteEntry.js',
            exposedModule:  './Component'
        }).then(m => m.flightComponent)
}
];
