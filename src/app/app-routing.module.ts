import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  { path: "", redirectTo:'home', pathMatch: "full"},
  {path: 'content/:id', component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
