import { Component, EventEmitter, Output } from '@angular/core';
import { MetaData } from './models/metadata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-custom-elements';

  @Output() action = new EventEmitter<MetaData>();

  firstBtnProperties: MetaData = {
    action: 'click',
    img: 'data:image/png;base64,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',
    data: {
      id: 'firstBtn',
    }
  };

  secondBtnProperties: MetaData = {
    action: 'click',
    img: 'data:image/png;base64,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',
    data: {
      id: 'secondBtn',
    }
  };

  thirdBtnProperties: MetaData = {
    action: 'click',
    img: 'data:image/png;base64,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',
    data: {
      id: 'thirdBtn',
      jsonstr: JSON.stringify({
        open: true,
        modal: true,
        title: 'Angular Custom Elements',
      })
    }
  };

  constructor() { }

  handleEvents($event: any) {
    this.action.emit($event);
  }
}
