import { Injectable } from '@angular/core';
import { TextureLoader, MeshBasicMaterial, SphereGeometry, Mesh, UVMapping, RepeatWrapping, DoubleSide } from 'three'

@Injectable({
  providedIn: 'root'
})
export class ImageSphereService {

  private textureLoader: TextureLoader = new TextureLoader();
  private geometry: SphereGeometry = new SphereGeometry(5, 32, 32);
  private sphere: Mesh;


  getSphere(image: string) {
    if (this.sphere?.material) {
      this.sphere.clear();
    }
    const material = new MeshBasicMaterial({ map: this.loadImage(image), side: DoubleSide });
    this.sphere = new Mesh(this.geometry, material);
    return this.sphere;
  }

  private loadImage(image: string) {
    const texture = this.textureLoader.load(image);
    texture.mapping = UVMapping;
    texture.wrapS = RepeatWrapping;
    texture.repeat.x = -1
    return texture;
  }

}
