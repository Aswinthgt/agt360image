# 360 Image View for Angular

An Angular component for displaying and interacting with 360-degree images.

# What's New in agt360image-view v0.0.2

### 1. Reactive Signal Mechanism

- Transitioned to Angular's new reactive primitive type, signals, for improved change detection efficiency.
- Automatic notification of dependent components ensures streamlined updates without exhaustive tree checks.

### 2. Optional Autorotate Feature

- Developers now have the flexibility to enable or disable autorotation at any time.
- Empower users with dynamic viewing experiences or manual exploration of 360 images as desired.

## Dependencies

version available for Angular

| agt360image-view | Angular     |
| ---------------- | ----------- |
| 0.0.1            | 17.x        |
| 0.0.2            | 17.3.x      |

## Installation

Install the package using npm:

```bash or powershell```
npm install agt360image-view.

## Setup

**step 1:** import component

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Agt360imageViewComponent } from 'agt360image-view';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Agt360imageViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
```

**step 2:** define properties

``` typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Agt360imageViewComponent, RotateImage } from 'agt360image-view';  // Import 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Agt360imageViewComponent],
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

```

**step 3:** assign values

```html
<agt360image-view
  [src]="src"
  [width]="width"
  [height]="height"
  [autoRotate]="autoroatate"
></agt360image-view>
```

## Mandatory Fields

| property         | required    |
| ---------------- | ----------- |
| src              | true        |
| width            | true        |
| height           | true        |
| autoRotate       | optional    |


## License

MIT

---

> GitHub [@Aswinthgt](https://github.com/Aswinthgt)
