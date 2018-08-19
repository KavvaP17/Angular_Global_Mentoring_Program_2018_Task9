import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './components/logo/logo.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoadingComponent } from './components/loading/loading.component';

import { InitIconsService } from './services/init-icons/init-icons.service';
import { LoadingService } from './services/loading/loading.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    BreadcrumbsComponent, 
    LogoComponent, 
    LogoutComponent, 
    PageNotFoundComponent, 
    LoadingComponent
  ],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    BreadcrumbsComponent, 
    LogoutComponent,
    LoadingComponent
  ],
  providers: [InitIconsService, LoadingService]
})
export class CoreModule { }
