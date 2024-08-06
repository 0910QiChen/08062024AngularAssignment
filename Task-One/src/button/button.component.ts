import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {

  private message:string = "Itlize is the best!";

  public printMessage() {
    alert(this.message);
  }

}