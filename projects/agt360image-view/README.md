# 360 Image View for Angular

An Angular component for displaying and interacting with 360-degree images.

## Dependencies

version available for Angular

| agt360image-view | Angular     |
| ---------------- | ----------- |
| 0.0.1            | 17.x        |

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
import { Agt360imageViewComponent } from 'agt360image-view'

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
import { Agt360imageViewComponent } from 'agt360image-view'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Agt360imageViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  src = '../assets/example.jpg'  // add the 360 image url
  width = 700;
  height = 500;

}
```

**step 3:** assign values

```html
<agt360image-view [src]="src" [width]="width" [height]='height'></agt360image-view>
```

## Mandatory Fields

| property         | required    |
| ---------------- | ----------- |
| src              | TRUE        |
| width            | TRUE        |
| height           | TRUE        |


## License

MIT

---

> GitHub [@Aswinthgt](https://github.com/Aswinthgt)
