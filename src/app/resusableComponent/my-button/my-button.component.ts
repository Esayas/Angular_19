import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css',
})
export class MyButtonComponent {
  @Input() btnText: string = 'Click Me';
  @Input() btnClass: string = 'btn btn-primary';

  @Output() onBtnClicked = new EventEmitter();

  onClick() {
    this.onBtnClicked.emit();
  }
}
