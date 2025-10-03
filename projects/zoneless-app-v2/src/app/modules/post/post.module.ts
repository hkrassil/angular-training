import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

const routes: Route[] = [
    {
        path: "",
        loadComponent: () => import("./pages/posts/posts.component").then(c => c.PostsComponent)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class PostModule {}