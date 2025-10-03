import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Post, PostForCreate } from "../models/post.model";

@Injectable({ providedIn: "root" })
export class PostService {
    private http = inject(HttpClient);

    list(quickSearch: string): Observable<Post[]> {
        const qs = quickSearch?.toLocaleLowerCase().trim();

        return this.http.get<Post[]>("http://localhost:3000/posts").pipe(
            // Simulation of server-side filter
            map(posts => posts.filter(post => {
                if (qs.length === 0) return true;

                return post.title.toLocaleLowerCase().indexOf(qs) >= 0
            }))
        );
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