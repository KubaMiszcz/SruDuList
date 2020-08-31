import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { EditNoteComponent } from './overview/edit-note/edit-note.component';
import { NoteTileComponent } from './overview/note-tile/note-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    EditNoteComponent,
    NoteTileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
