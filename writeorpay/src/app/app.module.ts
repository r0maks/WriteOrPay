import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CountTileComponent } from './count-tile/count-tile.component';
import { CalendarPaneComponent } from './calendar-pane/calendar-pane.component';
import { NoteListComponent } from './note-list/note-list.component';
import { ActionHeaderComponent } from './action-header/action-header.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/app.reducer';


@NgModule({
  declarations: [
    AppComponent,
    NoteEditorComponent,
    SidebarComponent,
    CountTileComponent,
    CalendarPaneComponent,
    NoteListComponent,
    ActionHeaderComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducer, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
