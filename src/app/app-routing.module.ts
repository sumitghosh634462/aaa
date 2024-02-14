import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieComponent } from './movie/movie.component';
import { PostListComponent } from './post-list/post-list.component';
import { QueryOutputComponent } from './query-output/query-output.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { path: " ", component: AppComponent },
  { path: "task", component: TaskComponent },
  { path: "movie", component: MovieComponent },
  { path:"post",component:PostListComponent},
  { path: "movie/:id", component: MovieDetailsComponent },
  { path: "movie/:id/:name", component: MovieDetailsComponent },
  { path: 'query', component: QueryOutputComponent }
  // {path: '**',component:LoginComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
