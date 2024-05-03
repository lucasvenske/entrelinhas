import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CensuraComponent } from './censura/censura.component';
import { SobreComponent } from './sobre/sobre.component';
import { PlaylistComponent } from './playlist/playlist.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "censura",
        component: CensuraComponent
    },
    {
        path: "sobre-o-projeto",
        component: SobreComponent
    },
    {
        path: "playlist-censurada-portugal",
        component: PlaylistComponent
    },
    {
        path: "playlist-nao-censurada-portugal",
        component: PlaylistComponent
    },
    {
        path: "playlist-censurada-brasil",
        component: PlaylistComponent
    },
    {
        path: "playlist-nao-censurada-brasil",
        component: PlaylistComponent
    },
    { path: '**', redirectTo: '' }
];
