import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {CursosComponent} from "./cursos/cursos.component";
import {NgModule} from "@angular/core";

const appRouter: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cursos', component: CursosComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRouter)
  ], exports: [RouterModule]
})
export class AppRouting {
}
