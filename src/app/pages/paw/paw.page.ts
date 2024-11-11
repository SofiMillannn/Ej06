import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonIcon, IonImg,
  IonItem, IonLabel,
  IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {ZeldaService} from "../../services/zelda.service";
import {Creature} from "../../common/interfaces";

@Component({
  selector: 'app-paw',
  templateUrl: './paw.page.html',
  styleUrls: ['./paw.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonIcon, IonAvatar, IonImg, IonLabel]
})
export class PawPage implements OnInit {
private readonly zeldaService : ZeldaService = inject(ZeldaService);
creatures: Creature[] = [];
  constructor() { }

  ngOnInit() {
    this.loadcreatures();
  }

  private loadcreatures() {
    this.zeldaService.getCreatures().subscribe(
      {
        next: value => {
          this.creatures = value.data;
        },
        error: error => {
          console.log(error);
        },
        complete:() => {
          console.log('Creatures loaded successfully.');
        }
      }
    )
  }
}
