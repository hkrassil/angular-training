import { Component, input } from "@angular/core";
import { Post } from "../../models/post.model";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-post-item",
    templateUrl: "post-item.component.html",
    imports: [CommonModule]
})
export class PostItemComponent {
    post = input<Post>();
}