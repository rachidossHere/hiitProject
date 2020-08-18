import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ShortUrlPipe } from './pipes/short-url.pipe';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [HeaderComponent, ShortUrlPipe],
  imports: [
    CommonModule,
    TooltipModule.forRoot()
  ],
  exports : [
    HeaderComponent,
    ShortUrlPipe,
    TooltipModule
  ]
})
export class SharedModule {
  static forRoot() {
    return {
        ngModule: SharedModule
    };
}
 }
