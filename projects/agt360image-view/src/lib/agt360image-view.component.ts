import { AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild, afterNextRender, effect, inject, input, viewChild } from '@angular/core';
import { LoaderService } from './service/loader.service';
import { RotateImage } from './models/interface';

@Component({
  selector: 'agt360image-view',
  standalone: true,
  imports: [],
  template: `
    <div #renderImage></div>
  `,
  styles: ``
})
export class Agt360imageViewComponent implements AfterViewInit {

  src = input.required<string>();
  width = input.required<number>();
  height = input.required<number>();
  autoRotate = input<RotateImage>();

  renderImage = viewChild<ElementRef>('renderImage');

  private loadImage = inject(LoaderService)

  private rerender = false;

  constructor() {
    effect(()=>{
      this.changes();
    })
  }

  changes(): void {
    if (this.rerender) {
      this.loadImage.image_Re_render(this.src())
      this.loadImage.update_W_H(this.width(), this.height())
    }

    if(this.rerender && this.autoRotate()){
      this.loadImage.autoRotate(this.autoRotate())
    }
  }

  ngAfterViewInit(): void {
    this.loadImage.setInit(this.renderImage() as ElementRef, this.src(), this.width(), this.height())
    this.rerender = true;
  }
}
