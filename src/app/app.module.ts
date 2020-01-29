import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterParentTempateComponent } from './register-parent-tempate/register-parent-tempate.component';
import { ChildTemplateRegisterAppComponent } from './child-template-register-app/child-template-register-app.component';
import { HttparentComponent } from './httparent/httparent.component';
import { HttchildComponent } from './httchild/httchild.component';
import { AllserviceService } from './allservice.service';
import { RouterModule,Routes} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ViewComponent } from './view/view.component';

const appRoutes:Routes=[
  {path:'',component:HomePageComponent},
  {path:'view/:id',component:ViewComponent},
  {path:'notFound',component:ErrorPageComponent},
  {path:'dashboard',component: RegisterParentTempateComponent},
  {path:'**',redirectTo:'/notFound'}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterParentTempateComponent,
    ChildTemplateRegisterAppComponent,
    HttparentComponent,
    HttchildComponent,
    HomePageComponent,
    ErrorPageComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [AllserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
