import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { DrawerModule } from 'primeng/drawer';
import { MyButtonComponent } from '../molecules/buttons/my-button';

@Component({
  selector: 'app-shell-regular',
  imports: [ToolbarModule, DrawerModule, MyButtonComponent],
  styleUrl: './shell-regular.css',
  template: `
    <div class="scheme-light bg-white text-slate-900 min-h-screen flex flex-col">
      <p-drawer [(visible)]="sidebarVisible" header="Sidebar">
          <p>Sidebar content goes here.</p>
      </p-drawer>
      
      <p-toolbar styleClass="bg-brand-900 border-none rounded-none px-6 py-4">
        <ng-template pTemplate="start">
          <div class="flex items-center gap-2">
            <app-my-button icon="pi pi-bars" label="" (action)="sidebarVisible = true"></app-my-button>
            <span class="text-xl font-bold text-brand-50">MyApp</span>
          </div>
        </ng-template>
      </p-toolbar>

      <main class="flex-1 w-full">
         <ng-content></ng-content>
      </main>

      <footer class="bg-surface-200 border-t border-surface-300 p-4 text-center">
        <p class="text-surface-600 text-sm">
          © 2025 Enterprise Dashboard. Powered by Angular & PrimeNG.
        </p>
      </footer>
      
    </div>
  `,
})
export class ShellRegular {
  sidebarVisible: boolean = false;
}
