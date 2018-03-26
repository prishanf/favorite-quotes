import { SettingService } from './../../services/settings.service';
import { Component } from '@angular/core';
import { IonicPage, Toggle } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settingService: SettingService){
  }

  onToggle(toggle:Toggle){
    this.settingService.setBackground(toggle.checked);
  }

  checkAltBackground(){
    return this.settingService.isAltBackground();
  }

}
