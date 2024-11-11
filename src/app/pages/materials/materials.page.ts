import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.page.html',
  styleUrls: ['./materials.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MaterialsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
