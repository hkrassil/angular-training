import { Component, input } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: "app-quick-search",
    templateUrl: "quick-search.component.html",
    imports: [ReactiveFormsModule]
})
export class QuickSearchComponent {
    ctrl = input.required<FormControl>()
}