
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { routing } from './app.routing';
import { AuthenticationService } from './authentication/authentication.service';

import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { TextListComponent } from './text-list/text-list.component';
import { ImageComponent } from './image/image.component';
import { ImageListComponent } from './image-list/image-list.component';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { PrivateComponent } from './private/private.component';
import { ProfileComponent } from './profile/profile.component';
import { LogInComponent } from './log-in/log-in.component';
import { FeedComponent } from './feed/feed.component';
import { VideoComponent } from './video/video.component';

import { YoutubeService } from './youtube.service';
import { VideoFbService } from './video-fb.service';
import { SafePipe } from './safe.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};

@NgModule({
  declarations: [
    TextComponent,
    TextListComponent,
    ImageComponent,
    ImageListComponent,
    PrivateComponent,
    LogInComponent,
    ProfileComponent,
    FeedComponent,
    VideoComponent,
    AppComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule,
    routing
  ],
  providers: [AuthenticationService, YoutubeService, VideoFbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
