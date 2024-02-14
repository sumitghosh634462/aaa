import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PracticeComponent } from './practice/practice.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TaskComponent } from './task/task.component';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ObservableComponent } from './observable/observable.component';
import { QueryParamsComponent } from './query-params/query-params.component';
import { QueryOutputComponent } from './query-output/query-output.component';
import { PostListComponent } from './post-list/post-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PracticeComponent,
    ReactiveComponent,
    TaskComponent,
    MovieComponent,
    MovieDetailsComponent,
    ObservableComponent,
    QueryParamsComponent,
    QueryOutputComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    // RouterModule.forRoot([
    //   { path: "post", component: TaskComponent },
    //   { path: "movie", component: MovieComponent },
    //   {path:"movie/:id",component:MovieDetailsComponent},
    //   {path:"movie/:id/:name",component:MovieDetailsComponent},
    //   {path:" ",component:AppComponent},
    //   {path: 'query', component: QueryOutputComponent}
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
