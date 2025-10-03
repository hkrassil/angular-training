import { Component, inject, signal, WritableSignal } from "@angular/core";
import { PostService } from "../../services/post.service";
import { CommonModule } from "@angular/common";
import { Post } from "../../models/post.model";

@Component({
    selector: "app-posts",
    templateUrl: "posts.component.html",
    imports: [CommonModule]
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