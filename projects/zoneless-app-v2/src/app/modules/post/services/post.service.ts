import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post, PostForCreate } from "../models/post.model";

@Injectable({ providedIn: "root" })
export class PostService {
    private http = inject(HttpClient);

    list(): Observable<Post[]> {
        return this.http.get<Post[]>("http://localhost:3000/posts");
    }

    create(post: PostForCreate): Observable<Post> {
        return this.http.post<Post>("http://localhost:3000/posts", post);
    }

    retrieve(postId: Post["id"]): Observable<Post> {
        return this.http.get<Post>(`http://localhost:3000/posts/${postId}`);
    }

    update(post: Post): Observable<Post> {
        return this.http.put<Post>(`http://localhost:3000/posts/${post.id}`, post);
    }

    delete(postId: Post["id"]): Observable<void> {
        return this.http.delete<void>(`http://localhost:3000/posts/${postId}`);
    }
}