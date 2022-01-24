import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { map, switchMap } from "rxjs/operators";
import { LaunchFacadeService } from "../services/launch-facade.service";
import { LaunchDetailsGQL } from "../services/spacexGraphql.service";

@Component({
  selector: "app-launch-details",
  templateUrl: "./launch-details.component.html",
  styleUrls: ["./launch-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent {
  galleryOptions: NgxGalleryOptions[] = [
    {
      width: '600px',
      height: '400px',
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide
    },
    // max-width 800
    {
      breakpoint: 800,
      width: '100%',
      height: '600px',
      imagePercent: 80,
      thumbnailsPercent: 20,
      thumbnailsMargin: 20,
      thumbnailMargin: 20
    },
    // max-width 400
    {
      breakpoint: 400,
      preview: false
    }];

  galleryImages: NgxGalleryImage[] = [
    {
      small: 'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg',
      medium: 'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg',
      big: 'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg'
    },
    {
      small: 'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg',
      medium: 'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg',
      big: 'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg'
    },
    {
      small: 'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg',
      medium: 'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg',
      big: 'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg'
    },
    {
      small: 'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg',
      medium: 'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg',
      big: 'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg'
    },
    {
      small: 'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg',
      medium: 'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg',
      big: 'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg'
    },
    {
      small: 'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg',
      medium: 'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg',
      big: 'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg'
    }
  ];



  id;
   

  constructor(
    private readonly route: ActivatedRoute,
    private readonly launchFacade: LaunchFacadeService,
    private readonly launchDetailsService: LaunchDetailsGQL
  ) {
  }

   launchDetails$ = this.route.paramMap.pipe(
    map(params => params.get("id") as string),
    switchMap(id => this.launchFacade.pastLaunchDetailStoreCache(id)),
    map(res => res)
  );

  // launchDetails$ = this.route.paramMap.pipe(
  //   map(params => params.get("id") as string),
  //   switchMap(id => this.launchDetailsService.fetch({ id })),
  //   map(res => res.data.launch)
  // );


}
