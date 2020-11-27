import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PokemonComponent} from './pokemon/pokemon.component';

export const PagesRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: DashboardComponent
            }
        ]
    }
];
