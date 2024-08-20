import { Component } from '@angular/core';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-flight',
  standalone: true,
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.css'
})
export class flightComponent {
  constructor(public shared: SharedLibService) {

  }

  ngOnInit() {
    console.log(this.shared.userName);
  }
  changeName() {
    this.shared.userName = 'Miliran';
  }

}
