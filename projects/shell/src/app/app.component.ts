import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shell';
  constructor(public shared: SharedLibService) {

  }
  ngAfterViewInit() {
    this.shared.userName = 'vairamuthu';
  }
}
