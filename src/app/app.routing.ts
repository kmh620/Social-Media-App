import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateComponent } from './private/private.component';
import { ProfileComponent } from './profile/profile.component';
import { LogInComponent } from './log-in/log-in.component';
import { VideoComponent } from './video/video.component';
import { ImageComponent } from './image/image.component';
import { TextComponent } from './text/text.component';


const appRoutes: Routes = [
  {
    path: '',
    component: LogInComponent
  },
  {
    path: 'app-private',
    component: PrivateComponent
  },
  {
    path: 'app-profile',
    component: ProfileComponent
  },
  {
    path: 'app-private/videos',
    component: VideoComponent
  },
  {
    path: 'app-private/images',
    component: ImageComponent
  },
  {
    path: 'app-private/texts',
    component: TextComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
