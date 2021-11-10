import {NgModule} from "@angular/core";
import {DropdownDirective} from "./dropdown.directive";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LoaderComponent } from './loader/loader.component';

@NgModule({
    declarations: [
        DropdownDirective,
        LoaderComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule
    ],
  exports: [
    DropdownDirective,
    CommonModule,
    LoaderComponent
  ]
})
export class SharedModule { }
