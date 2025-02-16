import {
  AfterViewInit,
  Component,
  ElementRef,
  effect,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { LoaderService } from './service/loader.service';
import { RotateImage } from './models/interface';
import { NgStyle } from '@angular/common';
import { FullscreenService } from './service/fullscreen/fullscreen.service';

@Component({
  selector: 'agt360image-view',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './agt360image-view.component.html',
  styleUrls: ['./agt360image-view.component.scss']
})
export class Agt360imageViewComponent implements AfterViewInit {
  src = input.required<string>();
  width = input.required<number>();
  height = input.required<number>();
  autoRotate = input<RotateImage>();
  enableFullScreen = input<boolean>(false);

  style = signal({
    cursor: 'auto',
    maxWidth: 'fit-content',
  });

  renderImage = viewChild<ElementRef>('renderImage');

  private loadImage = inject(LoaderService);
  protected fullScreen = inject(FullscreenService);

  private rerender = false;

  constructor() {
    effect(() => {
      this.changes(true);
    });
  }

  private changes(reload: boolean = false): void {
    if (this.rerender && reload) {
      this.loadImage.image_Re_render(this.src());
      this.loadImage.update_W_H(this.width(), this.height());
    }

    if (this.rerender && this.autoRotate()) {
      this.loadImage.autoRotate(this.autoRotate());
    }
  }

  ngAfterViewInit(): void {
    this.loadImage.setInit(
      this.renderImage() as ElementRef,
      this.src(),
      this.width(),
      this.height()
    );
    this.rerender = true;
    this.changes();
  }

  protected grab() {
    this.style.update((prev) => ({
      ...prev,
      cursor: 'grab',
    }));
  }

  protected grabbing() {
    this.style.update((prev) => ({
      ...prev,
      cursor: 'grabbing',
    }));
  }

  protected gotFullScreen() {
    this.fullScreen.goFullscreen(
      this.renderImage()?.nativeElement.children[1] as ElementRef
    );
  }
}
