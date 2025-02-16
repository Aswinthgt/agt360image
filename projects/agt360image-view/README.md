# 360 Image View for Angular

An Angular component for displaying and interacting with 360-degree images.

## 🆕 What's New in v19.1.7
### Fixes & Improvements:
- ✅ **Auto-Rotation Bug Fixed:** Auto-rotation now works correctly in the latest version.
- ✅ **Improved Image Quality:** Better clarity and rendering performance.
- ✅ **Updated Angular Compatibility:** Now supports **Angular 19.1.7**.

### Demo

Check out the live demo: [360view-demo](https://360view-demo.vercel.app/)

## Dependencies

version available for Angular

| agt360image-view | Angular     |
| ---------------- | ----------- |
| 0.0.11           | 19.x        |
| 0.0.12           | 19.x        |
| 0.0.13           | 19.x        |

## Installation

Install the package using npm:

```bash or powershell```
npm install agt360image-view.

## Setup

**step 1:** Import component

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Agt360imageViewComponent } from 'agt360image-view';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Agt360imageViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
```

**step 2:** Define properties

``` typescript
import { Component } from '@angular/core';
import { Agt360imageViewComponent, RotateImage } from 'agt360image-view';  // Import 

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

```

**step 3:** Assign values

```html
<agt360image-view
  [src]="src"
  [width]="width"
  [height]="height"
  [autoRotate]="autoroatate"
  [enableFullScreen]="true"
></agt360image-view>
```

## Mandatory Fields

| property         | required    |
| ---------------- | ----------- |
| src              | true        |
| width            | true        |
| height           | true        |
| autoRotate       | optional    |
| enableFullScreen | optional    |


## License

MIT

---

> GitHub [@Aswinthgt](https://github.com/Aswinthgt)
