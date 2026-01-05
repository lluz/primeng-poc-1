import { Component } from '@angular/core';
import { ShellRegular } from '../../components/shells/shell-regular';
import { CardModule } from 'primeng/card';

@Component({
	selector: 'app-dashboard-a',
	imports: [ShellRegular, CardModule],
	styleUrl: './dashboard-a.css',
	template: `
    <app-shell-regular>
      <div class="p-6">
        <h1 class="text-3xl font-bold mb-6">Dashboard A</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p-card header="Card 1">
            <p class="m-0 text-surface-600">
              This is the first card. It contains some dummy text for demonstration purposes in a responsive grid layout.
            </p>
          </p-card>

          <p-card header="Card 2">
            <p class="m-0 text-surface-600">
              The second card has similar content. On larger screens, this will sit next to Card 1 in a two-column layout.
            </p>
          </p-card>

          <p-card header="Card 3" class="md:col-span-2">
            <p class="m-0 text-surface-600">
              The third card is positioned at the bottom. It spans across both columns on tablet screens and above, while stacking vertically on mobile.
            </p>
          </p-card>
        </div>
      </div>
    </app-shell-regular>
  `,
})
export class DashboardA { }
