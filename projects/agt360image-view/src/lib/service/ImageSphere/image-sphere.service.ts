import { Injectable } from '@angular/core';
import { TextureLoader, MeshBasicMaterial, SphereGeometry, Mesh, UVMapping, RepeatWrapping, DoubleSide, IcosahedronGeometry, BackSide, Color } from 'three'

@Injectable({
  providedIn: 'root'
})
export class ImageSphereService {

  private textureLoader: TextureLoader = new TextureLoader();
  private geometry: IcosahedronGeometry = new IcosahedronGeometry(1, 32);
  private sphere: Mesh;


  getSphere(image: string) {
    if (this.sphere?.material) {
      this.sphere.clear();
    }
    const material = new MeshBasicMaterial({ map: this.loadImage(image), side: BackSide });
    material.reflectivity = 0
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
