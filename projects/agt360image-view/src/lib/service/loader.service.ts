import { ElementRef, Injectable, NgZone, inject } from '@angular/core';
import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';
import { ImageSphereService } from './ImageSphere/image-sphere.service';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RotateImage } from '../models/interface';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private imageSphere = inject(ImageSphereService);
  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;
  private control: OrbitControls;
  private ngZone = inject(NgZone);

  setInit(element: ElementRef, image: string, width: number, height: number) {
    this.load_imageScene();
    this.load_imageCamera(width, height);
    this.imageRender(width, height);
    element.nativeElement.appendChild(this.renderer.domElement);
    this.set_orbitControl();
    const sphere = this.imageSphere.getSphere(image);
    this.scene.add(sphere);
    this.render();
  }


  private load_imageScene() {
    this.scene = new Scene();
  }

  private load_imageCamera(width: number, height: number) {
    this.camera = new PerspectiveCamera(
      75,
      width / height,
      0.01,
      1000
    );
    this.camera.position.z = 0.05;
  }

  private imageRender(width: number, height: number) {
    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setSize(width, height);
  }

  private set_orbitControl() {
    this.control = new OrbitControls(this.camera, this.renderer.domElement);
    this.control.rotateSpeed = -0.3;
    this.control.zoomSpeed = 5;
    this.control.panSpeed = -0.3;
    this.control.minDistance = 0.05; // Cannot zoom in closer than this
    this.control.maxDistance = 0.05; // Cannot zoom out farther than this
    this.control.enableZoom = true;
  }


  private render(): void {
    this.ngZone.runOutsideAngular(() => {
      requestAnimationFrame(() => this.render());
    });
    this.control.update()
    this.renderer.render(this.scene, this.camera);
  }

  image_Re_render(image: string) {
    this.scene.add(this.imageSphere.getSphere(image));
    this.renderer.render(this.scene, this.camera);
  }

  update_W_H(width: number, height: number) {
    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  autoRotate(options?: RotateImage) {
    this.control.autoRotate = options?.isRotate || false;
    this.control.autoRotateSpeed = options?.rotateSpeed || 0;
    this.control.update()
  }

}
