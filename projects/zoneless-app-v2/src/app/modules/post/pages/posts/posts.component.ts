import { Component, inject, signal, WritableSignal } from "@angular/core";
import { PostService } from "../../services/post.service";
import { CommonModule } from "@angular/common";
import { Post } from "../../models/post.model";
import { PostItemComponent } from "../../components/post-item/post-item.component";

@Component({
    selector: "app-posts",
    templateUrl: "posts.component.html",
    imports: [CommonModule, PostItemComponent]
})
export class PostsComponent {
    private postService = inject(PostService);

    posts: WritableSignal<Post[]> = signal([]);

    constructor() {
        this.postService.list().subscribe((posts) => {
            this.posts.set(posts);
        });
    }
}