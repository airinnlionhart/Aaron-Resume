import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SamplePlaygroundComponent } from './sample-playground/sample-playground.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ApplyComponent } from './apply/apply.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    LandingpageComponent,
    SamplePlaygroundComponent,
    ApplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: SamplePlaygroundComponent },
      { path: 'experience/:', component: ExperienceComponent },
      { path: 'landingpage/', component: LandingpageComponent },
      { path: 'apply/', component: ApplyComponent },
      
  ]),
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
