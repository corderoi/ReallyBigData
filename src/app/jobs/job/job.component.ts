//
// job.component.ts
// ReallyBigData
//
// Created by Ian Cordero on 11/16/17.
//
//

import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { JobsService } from "../service/jobs.service";

@Component({
    selector: 'job',
    templateUrl: './job.component.html',
    styleUrls: [ './job.component.css' ]
})
export class JobComponent implements OnInit {
    @Input()
    title: string = "Job";

    @Input()
    info: string;

    @Input()
    name: string;

    @Output()
    jobDidStop = new EventEmitter<string>();

    running: boolean = false;

    logs: string[] = [];

    constructor(
        private jobsService: JobsService
    ) {}

    ngOnInit() {
        if (this.name) {
            this.jobsService.fetchLogs(this.name)
                .subscribe(logText => {
                    this.logs.push(logText);
                });
        }
    }

    run() {
        this.running = true;
    }

    stop() {
        this.running = false;

        this.jobDidStop.emit(this.title);
    }
}