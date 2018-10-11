import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CountTileComponent } from './count-tile/count-tile.component';
import { CalendarPaneComponent } from './calendar-pane/calendar-pane.component';
import { NoteListComponent } from './note-list/note-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteEditorComponent,
    SidebarComponent,
    CountTileComponent,
    CalendarPaneComponent,
    NoteListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
