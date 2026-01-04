import { Component } from '@angular/core';

import { ShellRegular } from '../../components/shells/shell-regular';

@Component({
	selector: 'app-dashboard-a',
	imports: [ShellRegular],
	styleUrl: './dashboard-a.css',
	template: `
    <app-shell-regular>
      
      <div class="p-6 space-y-4">
        <h1 class="text-3xl font-bold mb-4">Dashboard A</h1>
      </div>

    </app-shell-regular>
  `,
})
export class DashboardA {
}
