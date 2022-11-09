import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { TestRouteComponent } from "./test-route.component"

const AppRoutes : Routes = [
    {path: '', component: TestRouteComponent}
]

NgModule({
 imports : [RouterModule.forChild(AppRoutes)],
 exports: [RouterModule]
})

export class testroute{ }