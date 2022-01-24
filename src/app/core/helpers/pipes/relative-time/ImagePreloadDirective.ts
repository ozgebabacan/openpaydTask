import {Directive, Input, HostBinding, Output, EventEmitter} from '@angular/core'
@Directive({
    selector: 'img[default]',
    host: {
      '(error)':'updateUrl()',
      '(load)': 'load()',
      '[src]':'src'
     }
  })
  
 export class ImagePreloadDirective {
    @Input() src:string;
    @Input() default:string;
    @HostBinding('class') className
    @Output() loaded = new EventEmitter();
  
    updateUrl() {
      this.src = this.default;
    }
    load(){
      this.className = "loaded";
      this.loaded.emit();
    }
  }