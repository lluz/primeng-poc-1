import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { RouterModule } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { MyButtonComponent } from '../molecules/buttons/my-button';

@Component({
  selector: 'app-shell-regular',
  imports: [ToolbarModule, DrawerModule, MyButtonComponent, RouterModule],
  host: {
    class: 'relative z-0 scheme-light bg-white text-slate-900 h-screen flex flex-col'
  },
  styleUrl: './shell-regular.css',
  template: `
    <p-toolbar class="bg-brand-900 border-b border-surface-300 rounded-none px-6 py-4">
      <ng-template pTemplate="start">
        <div class="flex items-center gap-2">
          <app-my-button icon="pi pi-bars" label="" (action)="sidebarVisible = true"></app-my-button>
          <span class="text-xl font-bold text-surface-400">MyApp</span>
        </div>
      </ng-template>
    </p-toolbar>

    <main class="flex-1 w-full overflow-auto bg-surface-100">
        <ng-content></ng-content>
    </main>

    <footer class="bg-surface-200 border-t border-surface-300 p-4 text-center">
      <p class="text-surface-600 text-sm">
        © 2025 Enterprise Dashboard. Powered by Angular & PrimeNG.
      </p>
    </footer>

    <div 
      class="absolute z-10 inset-0 bg-black/40 transition-opacity duration-300"
      [class.opacity-0]="!sidebarVisible"
      [class.opacity-100]="sidebarVisible"
      [class.pointer-events-none]="!sidebarVisible"
      (click)="sidebarVisible = false"
    ></div>

    <p-drawer 
      [(visible)]="sidebarVisible" 
      header="Sidebar"
      [modal]="false"
    >
        <nav class="flex flex-col gap-2">
          <a routerLink="/" (click)="sidebarVisible = false" class="p-3 hover:bg-surface-100 rounded text-surface-700 font-medium no-underline block">Home Page</a>
          <a routerLink="/dashboard-a" (click)="sidebarVisible = false" class="p-3 hover:bg-surface-100 rounded text-surface-700 font-medium no-underline block">Dashboard A</a>
          <a routerLink="/blank" (click)="sidebarVisible = false" class="p-3 hover:bg-surface-100 rounded text-surface-700 font-medium no-underline block">blank</a>
        </nav>
    </p-drawer>
  `,
})
export class ShellRegular {
  sidebarVisible: boolean = false;
}
