import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyObjectListComponent } from './components/list/object-list.component';


@NgModule({
    imports: [CommonModule],
    exports: [MyObjectListComponent],
    declarations: [MyObjectListComponent],
    providers: [],
})
export class MyObjectListModule { }
