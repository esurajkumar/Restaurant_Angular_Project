import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';

// have connected the all other component to the main component with routing concept
const routes: Routes = [
{ path : "Add", component : AddComponent },
{ path : "List", component : ListComponent },
{ path : "Login", component : LoginComponent },
{ path : "Register", component : RegisterComponent },
{ path : "Update/:id", component : UpdateComponent },
// open as default component
{path  : "",             component : PortfolioComponent},
// this router is connected to list.c.html
{ path : "Update", component : UpdateComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
