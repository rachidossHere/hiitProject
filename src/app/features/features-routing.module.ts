import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { NextpageComponent } from './nextpage/nextpage.component';
import { GithubComponent } from './github/github.component';


const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: 'github',
        component: GithubComponent
    },
      {
        path: 'shorturl',
        component: NextpageComponent
    },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
