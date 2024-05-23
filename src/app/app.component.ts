import { Component } from '@angular/core';
import { Agt360imageViewComponent, RotateImage } from 'agt360image-view';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Agt360imageViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  src = '../assets/pro2.jpg'
  width = 700;
  height = 500;
  autoroatate: RotateImage= {    // Optional
    isRotate: true,
    rotateSpeed: 0.5
  };
 
}
