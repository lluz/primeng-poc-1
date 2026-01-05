import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { MyButtonComponent } from '../../components/molecules/buttons/my-button';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-blank',
	standalone: true,
	imports: [DrawerModule, MyButtonComponent, RouterModule],
	styleUrl: './blank.css',
	template: `
    <div class="p-8 font-sans">
        <div class="flex flex-col items-start gap-4">

					<p class="text-lg text-slate-700">This is a blank page with no shell.</p>

					<nav class="flex flex-col gap-2">
						<app-my-button routerLink="/" label="Home Page" icon="pi pi-arrow-left"></app-my-button>
          </nav>

        </div>
    </div>
  `,
})
export class Blank {
}
