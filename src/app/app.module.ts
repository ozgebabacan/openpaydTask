import { launchReducers } from "./store/reducers/index";
import { launchEffects } from "./store/effects/index";
import { CUSTOM_ELEMENTS_SCHEMA, Injectable, NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LaunchListComponent } from "./launch-list/launch-list.component";
import { LaunchDetailsComponent } from "./launch-details/launch-details.component";
import { GraphQLModule } from "./graphql.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { RelativeTimePipe } from "./core/helpers/pipes/relative-time/relative-time.pipe";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { ImagePreloadDirective } from "./core/helpers/pipes/relative-time/ImagePreloadDirective";
import { NgxGalleryModule } from 'ngx-gallery';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { LaunchDetailEffects } from "./store/effects/launch.detail.effect";

@Injectable()
export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
     pinch: { enable: false },
     rotate: { enable: false },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    LaunchListComponent,
    LaunchDetailsComponent,
    RelativeTimePipe,
    ImagePreloadDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    StoreModule.forRoot(launchReducers),
    EffectsModule.forRoot(launchEffects),
    StoreDevtoolsModule.instrument(),
    NgxGalleryModule,
    RouterModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

