//
// jobs.component.ts
// ReallyBigData
//
// Created by Ian Cordero on 11/16/17.
//
//

import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'jobs',
    templateUrl: './jobs.component.html',
    styleUrls: [ './jobs.component.css' ]
})
export class JobsComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        console.log("JobsComponent init");
    }

    /**
     * @param {string} jobName
     */
    jobDidStop(jobName: string) {
        window.alert(jobName + " stopped");
    }
}