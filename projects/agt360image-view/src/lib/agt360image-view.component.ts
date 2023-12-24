import { Component, ElementRef, Input, OnChanges, ViewChild, afterNextRender } from '@angular/core';
import { LoaderService } from './service/loader.service';

@Component({
  selector: 'agt360image-view',
  standalone: true,
  imports: [],
  template: `
    <div #renderImage></div>
  `,
  styles: ``
})
export class Agt360imageViewComponent implements OnChanges {

  @Input({ required: true }) src: string;
  @Input({ required: true }) width: number;
  @Input({ required: true }) height: number;
  @ViewChild('renderImage') private renderImage: ElementRef;
  private rerender = false;

  constructor(private loadImage: LoaderService) {
    afterNextRender(() => {
      loadImage.setInit(this.renderImage, this.src, this.width, this.height)
      this.rerender = true;
    })
  }
  ngOnChanges(): void {
    if (this.rerender) {
      this.loadImage.image_Re_render(this.src)
      this.loadImage.update_W_H(this.width, this.height)
    }
  }
}
