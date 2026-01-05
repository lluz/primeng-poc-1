import { Component } from '@angular/core';

@Component({
    selector: 'my-card-footer',
    standalone: true,
    template: '<ng-content></ng-content>',
    host: {
        class: 'flex flex-row justify-between items-center w-full'
    }
})
export class MyCardFooterComponent { }
