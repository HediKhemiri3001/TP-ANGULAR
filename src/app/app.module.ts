import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestFilsComponent } from './test-fils/test-fils.component';
import { HighlightDirective } from './highlight-directive.directive';
import { CvModule } from './cv/cv.module';
import { CarteVisiteModule } from './carte-visite/carte-visite.module';
import { RainbowDirective } from './rainbow.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestFilsComponent,
    HighlightDirective,
    RainbowDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CvModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    CarteVisiteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
