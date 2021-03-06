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
import { reducers } from './store/reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { TextProcessorService } from './text-logic/text-processor.service';
import { SidebarActionsComponent } from './sidebar-actions/sidebar-actions.component';
import { PopoverComponent } from './popover/popover.component';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app.effects';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NoteService } from './note.service';
import { AngularFirestore } from '@angular/fire/firestore';

export const AppRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    NoteEditorComponent,
    SidebarComponent,
    SidebarActionsComponent,
    CountTileComponent,
    CalendarPaneComponent,
    NoteListComponent,
    ActionHeaderComponent,
    LoginComponent,
    HomeComponent,
    PopoverComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      AppRoutes,
      { enableTracing: true }
    ),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      AppEffects
    ]),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    NoteService,
    TextProcessorService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
