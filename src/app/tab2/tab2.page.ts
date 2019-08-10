import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddVisitorPageComponent } from '../add-visitor-page/add-visitor-page.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private modalCtrl: ModalController
  ) { }

  async  routeToAddVisitorPage() {
    let modal = await this.modalCtrl.create({
      component: AddVisitorPageComponent
    })
    return await modal.present();
  }
}
