import { Component, effect, inject, Signal, signal, WritableSignal } from "@angular/core";
import { PostService } from "../../services/post.service";
import { CommonModule } from "@angular/common";
import { Post } from "../../models/post.model";
import { PostItemComponent } from "../../components/post-item/post-item.component";
import { PostDialogComponent } from "../../components/post-dialog/post-dialog.component";

@Component({
    selector: "app-posts",
    templateUrl: "posts.component.html",
    imports: [CommonModule, PostItemComponent, PostDialogComponent]
})
export class PostsComponent {
    private postService = inject(PostService);

    // posts is the object that is displayed in the template
    posts: WritableSignal<Post[]> = signal([]);

    postToEdit: WritableSignal<Post | null> = signal(null);
    refresh: WritableSignal<number> = signal(0);

    constructor() {
        // Single location to wire all inputs to the posts
        effect(() => {
            this.refresh(); // Effect input to trigger
            this.postService.list().subscribe((posts) => {
                this.posts.set(posts);
            });
        });
    }

    openDialog(post: Post) {
        this.postToEdit.set(post);
    }

    cancel() {
        this.postToEdit.set(null);
    }

    update(post: Post) {
        this.postService.update(post).subscribe(() => {
            this.refresh.update(count => ++count); // Send event to trigger refresh
            this.postToEdit.set(null); // Closes dialog
        });
    }
}