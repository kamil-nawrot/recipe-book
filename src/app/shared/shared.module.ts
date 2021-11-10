import {NgModule} from "@angular/core";
import {DropdownDirective} from "./dropdown.directive";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        DropdownDirective
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule
    ],
    exports: [
        DropdownDirective,
        CommonModule
    ]
})
export class SharedModule { }
