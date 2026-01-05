import { Component } from '@angular/core';
import { ShellRegular } from '../../components/shells/shell-regular';
import { MyCardComponent } from '../../components/compounds/my-card';
import { MyCardFooterComponent } from '../../components/compounds/my-card-footer';
import { MyButtonComponent } from '../../components/molecules/buttons/my-button';

@Component({
	selector: 'app-dashboard-a',
	imports: [ShellRegular, MyCardComponent, MyCardFooterComponent, MyButtonComponent],
	styleUrl: './dashboard-a.css',
	template: `
    <app-shell-regular>
      <div class="p-6">
        <h1 class="text-3xl font-bold mb-6 text-slate-800">Dashboard A</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					
          <app-my-card header="Card 1">
            <p class="m-0">
              This is the first card. It contains some dummy text for demonstration purposes in a responsive grid layout.
            </p>
            <my-card-footer>
              <app-my-button label="Action 1" variant="primary"></app-my-button>
            </my-card-footer>
          </app-my-card>

          <app-my-card header="Card 2" titleClass="text-emerald-600">
            <p class="m-0">
              The second card has similar content. On larger screens, this will sit next to Card 1 in a two-column layout.
            </p>
            <my-card-footer>
              <app-my-button label="Action 2" variant="success"></app-my-button>
              <app-my-button label="Second Op" variant="secondary" [isOutlined]="true"></app-my-button>
            </my-card-footer>
          </app-my-card>

          <app-my-card header="Card 3" class="md:col-span-2">
            <p class="m-0">
              The third card is positioned at the bottom. It spans across both columns on tablet screens and above, while stacking vertically on mobile.
            </p>
            <my-card-footer>
              <app-my-button label="Delete" variant="danger"></app-my-button>
            </my-card-footer>
          </app-my-card>

        </div>
      </div>
    </app-shell-regular>
  `,
})
export class DashboardA { }
