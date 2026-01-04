import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-blank',
    standalone: true,
    imports: [DrawerModule, ButtonModule],
    styleUrl: './blank.css',
    template: `
    <div class="p-8 font-sans">
        <p-drawer [(visible)]="visible" position="right" header="Right Drawer" styleClass="!w-80">
            <p>This is the content of the right drawer.</p>
        </p-drawer>

        <div class="flex flex-col items-start gap-4">
            <p class="text-lg text-slate-700">This is a blank page with no shell.</p>
            <p-button label="Open Right Drawer" icon="pi pi-arrow-left" (onClick)="visible = true"></p-button>
        </div>
    </div>
  `,
})
export class Blank {
    visible: boolean = false;
}
