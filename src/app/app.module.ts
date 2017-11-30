//
// app.module.ts
// ReallyBigData
//
// Created by Ian Cordero on 11/16/17.
//
//

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { JobsComponent } from "./jobs/jobs.component";
import { JobComponent } from "./jobs/job/job.component";
import { JobsService } from "./jobs/service/jobs.service";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: 'jobs',
                component: JobsComponent
            }
        ])
    ],
    declarations: [
        JobsComponent,
        JobComponent,
        AppComponent
    ],
    providers: [
        JobsService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
