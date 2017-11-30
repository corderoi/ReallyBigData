//
// jobs.component.ts
// ReallyBigData
//
// Created by Ian Cordero on 11/16/17.
//
//

import { Component, OnInit } from "@angular/core";
import { JobsService } from "./service/jobs.service";

@Component({
    selector: 'jobs',
    templateUrl: './jobs.component.html',
    styleUrls: [ './jobs.component.css' ]
})
export class JobsComponent implements OnInit {
    infoGeneral: string;

    constructor(
        private jobsService: JobsService
    ) {}

    ngOnInit() {
        console.log("JobsComponent init");

        this.jobsService.fetchInfo('general')
            .subscribe(info => {
                this.infoGeneral = info;
            });
    }

    /**
     * @param {string} jobName
     */
    jobDidStop(jobName: string) {
        window.alert(jobName + " stopped");
    }
}