import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { EditNoteComponent } from './overview/edit-note/edit-note.component';
import { NoteTileComponent } from './overview/note-tile/note-tile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TagTileComponent } from './tag-tile/tag-tile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TagListComponent } from './tag-list/tag-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    EditNoteComponent,
    NoteTileComponent,
    NavbarComponent,
    TagTileComponent,
    TagListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
