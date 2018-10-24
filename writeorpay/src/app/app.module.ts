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
import { ApiService } from './services/api.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

export const AppRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    NoteEditorComponent,
    SidebarComponent,
    CountTileComponent,
    CalendarPaneComponent,
    NoteListComponent,
    ActionHeaderComponent,
    LoginComponent,
    HomeComponent,
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
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
