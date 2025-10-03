import { Component, input, OnInit, output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Post } from "../../models/post.model";

@Component({
    selector: "app-post-dialog",
    templateUrl: "post-dialog.component.html",
    styleUrl: "post-dialog.component.scss",
    imports: [ReactiveFormsModule]
})
export class PostDialogComponent implements OnInit{
    post = input.required<Post>();

    onCancel = output<void>();
    onUpdate = output<Post>();

    form = new FormGroup({
        title: new FormControl("", Validators.required),
        views: new FormControl<number | null>(null)
    });

    get title(): FormControl {
        return this.form.get("title") as FormControl;
    }

    ngOnInit(): void {
        this.form.patchValue(this.post());
    }

    cancel() {
        this.onCancel.emit();
    }

    save() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.onUpdate.emit({ ...this.post(), ...this.form.value } as Post);
    }
}