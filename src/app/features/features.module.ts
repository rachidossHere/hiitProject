import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { SharedModule } from '../shared/shared.module';
import { GithubComponent } from './github/github.component';
import { GithubService } from '../shared/services/github.service';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { NextpageComponent } from './nextpage/nextpage.component';
import { ShortUrlPipe } from '../shared/pipes/short-url.pipe';
import {ClipboardModule} from '@angular/cdk/clipboard';
@NgModule({
  declarations: [FeaturesComponent, GithubComponent, NextpageComponent],
  imports: [
    CommonModule,
    FormsModule,
    FeaturesRoutingModule,
    SharedModule,
    MatCardModule,
    MatFormFieldModule,
    ClipboardModule
  ],
  providers: [
    GithubService,
    ShortUrlPipe
  ]
})
export class FeaturesModule { }
