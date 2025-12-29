import { Component } from '@angular/core';

import { ShellRegular } from '../../components/shells/shell-regular';

@Component({
  selector: 'app-home',
  imports: [ShellRegular],
  styleUrl: './home.css',
  template: `
    <app-shell-regular>
      
      <div>
        <h1>Home Page</h1>
        <p>Text</p>
      </div>

    </app-shell-regular>
  `,
})
export class Home {
}
