import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FullscreenService {
  constructor() {}

  goFullscreen(elem: any) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      // Firefox
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      // Chrome, Safari, Opera
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      // IE/Edge
      elem.msRequestFullscreen();
    }
  }

  exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    // } else if (document.mozCancelFullScreen) {
    //   // Firefox
    //   document.mozCancelFullScreen();
    // } else if (document.webkitExitFullscreen) {
    //   // Chrome, Safari, Opera
    //   document.webkitExitFullscreen();
    // } else if (document.msExitFullscreen) {
    //   // IE/Edge
    //   document.msExitFullscreen();
    }
  }
}
