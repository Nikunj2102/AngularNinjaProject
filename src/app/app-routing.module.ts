import { NgModule } from '@angular/core';
import {Routes,RouterModule, Route} from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { HomeComponent } from './home/home.component';

//now try using array instead
const routes: Routes = [
    {path:"directory" , component:DirectoryComponent},
    {path: "directory/:ninja" , component:DirectoryComponent},
    {path: "" , component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{ }
