import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; // <- 
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrincipalComponent } from './principal/principal.component';
import { AlumnosComponent } from './alumnos/alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrincipalComponent,
    AlumnosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, //para hacer peticiones
    RouterModule.forRoot([ //para crear urls
        {path: '', component: PrincipalComponent},
        {path: 'alumnos', component: AlumnosComponent}
        // {path: 'playlist', component: PlaylistComponent},
        // {path: 'tracks', component: SongsComponent},
        // {path: 'artist/:id', component: ArtistComponent},
        // {path: 'album/:id', component: AlbumComponent},
        // {path: '**', component: NotFoundComponent} //cualquier url distinta a las demas
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
