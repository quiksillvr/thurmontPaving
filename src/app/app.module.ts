import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ResidentialComponent } from './residential/residential.component';
import { CommercialComponent } from './commercial/commercial.component';
import { CommentsComponent } from './_components/comments/comments.component';
import { VideosComponent } from './_components/videos/videos.component';
import { ImageCarouselComponent } from './_components/image-carousel/image-carousel.component';
import { PicVidPillsComponent } from './_components/pic-vid-pills/pic-vid-pills.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ResidentialComponent,
    CommercialComponent,
    CommentsComponent,
    VideosComponent,
    ImageCarouselComponent,
    PicVidPillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
