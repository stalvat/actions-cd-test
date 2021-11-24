import { Component } from '@angular/core';
import { environment as env } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'actions-cd-test';
  env = env.myEnv;
}
