import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { NoteViewComponent } from './note-view/note-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { EditNoteOpenerComponent } from './edit-note-opener/edit-note-opener.component';
import { EditNoteViewComponent } from './edit-note-view/edit-note-view.component';
import { AppComponent } from './app.component';
import { RouterService } from './services/router.service';
import { NotesService } from './services/notes.service';
import { AuthenticationService } from './services/authentication.service';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NoteTakerComponent } from './note-taker/note-taker.component';
import { NoteComponent } from './note/note.component';
import { HeaderComponent } from './header/header.component';

const route: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [CanActivateRouteGuard],
    children: [
      {
        path : '',
        redirectTo : 'view/noteview',
        pathMatch : 'full'
      },
      {
        path : 'view/noteview',
        component : NoteViewComponent
      },
      {
        path : 'view/listview',
        component : ListViewComponent
      },
      {
        path : 'note/:noteId/edit',
        component : EditNoteOpenerComponent,
        outlet : 'noteEditOutlet'
      }
    ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    NoteComponent,
    ListViewComponent,
    NoteTakerComponent,
    NoteViewComponent,
    EditNoteOpenerComponent,
    EditNoteViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    RouterModule.forRoot(route)
  ],
  providers: [
    AuthenticationService,
    NotesService,
    RouterService,
    CanActivateRouteGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [EditNoteViewComponent]
})

export class AppModule { }
