import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { MyButtonComponent } from '../../components/molecules/buttons/my-button';
import { RouterModule } from '@angular/router';

import { ShellRegular } from '../../components/shells/shell-regular';

@Component({
  selector: 'app-home',
  imports: [ShellRegular, DialogModule, MyButtonComponent, RouterModule],
  styleUrl: './home.css',
  template: `
    <app-shell-regular>
      
      <div class="p-6 space-y-4">
        <h1 class="text-3xl font-bold mb-4">Home Page</h1>
        <p>Text</p>
        
        <app-my-button label="Open Dialog" (action)="displayDialog = true"></app-my-button>

        <p-dialog 
          header="Info Dialog" 
          [(visible)]="displayDialog" 
          [modal]="true" 
          [style]="{ width: '50rem' }" 
          [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }" 
          [maximizable]="true"
        >
            <p class="text-surface-500 dark:text-surface-400 block mb-8">This is a dummy text inside a dialog window. You can navigate from here.</p>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">This is a dummy text inside a dialog window. You can navigate from here.</p>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">This is a dummy text inside a dialog window. You can navigate from here.</p>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">This is a dummy text inside a dialog window. You can navigate from here.</p>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">This is a dummy text inside a dialog window. You can navigate from here.</p>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">This is a dummy text inside a dialog window. You can navigate from here.</p>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">This is a dummy text inside a dialog window. You can navigate from here.</p>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">This is a dummy text inside a dialog window. You can navigate from here.</p>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">This is a dummy text inside a dialog window. You can navigate from here.</p>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">This is a dummy text inside a dialog window. You can navigate from here.</p>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">This is a dummy text inside a dialog window. You can navigate from here.</p>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">This is a dummy text inside a dialog window. You can navigate from here.</p>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">This is a dummy text inside a dialog window. You can navigate from here.</p>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">This is a dummy text inside a dialog window. You can navigate from here.</p>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">This is a dummy text inside a dialog window. You can navigate from here.</p>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">This is a dummy text inside a dialog window. You can navigate from here.</p>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">This is a dummy text inside a dialog window. You can navigate from here.</p>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">This is a dummy text inside a dialog window. You can navigate from here.</p>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">This is a dummy text inside a dialog window. You can navigate from here.</p>
            <p class="text-surface-500 dark:text-surface-400 block mb-8">This is a dummy text inside a dialog window. You can navigate from here.</p>
            <ng-template #footer>
                <app-my-button label="Go to Dashboard A" routerLink="/dashboard-a" (click)="displayDialog = false"></app-my-button>
            </ng-template>
        </p-dialog>

        <p class="leading-relaxed text-surface-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p class="leading-relaxed text-surface-600">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.
        </p>
        <p class="leading-relaxed text-surface-600">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
        </p>
        <p class="leading-relaxed text-surface-600">
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
        </p>
        <p class="leading-relaxed text-surface-600">
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
        <p class="leading-relaxed text-surface-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p class="leading-relaxed text-surface-600">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.
        </p>
        <p class="leading-relaxed text-surface-600">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
        </p>
        <p class="leading-relaxed text-surface-600">
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
        </p>
        <p class="leading-relaxed text-surface-600">
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
        <p class="leading-relaxed text-surface-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p class="leading-relaxed text-surface-600">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.
        </p>
        <p class="leading-relaxed text-surface-600">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
        </p>
        <p class="leading-relaxed text-surface-600">
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
        </p>
        <p class="leading-relaxed text-surface-600">
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
      </div>

    </app-shell-regular>
  `,
})
export class Home {
  displayDialog: boolean = false;
}
