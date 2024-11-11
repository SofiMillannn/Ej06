import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {add, flash, hammer, heart, leaf, paw, shield} from "ionicons/icons";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({paw, leaf, hammer,flash,shield,heart})
  }
}
