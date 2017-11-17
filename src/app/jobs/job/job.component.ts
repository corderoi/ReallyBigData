//
// job.component.ts
// ReallyBigData
//
// Created by Ian Cordero on 11/16/17.
//
//

import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'job',
    templateUrl: './job.component.html',
    styleUrls: [ './job.component.css' ]
})
export class JobComponent implements OnInit {
    @Input()
    title: string = "Job";

    running: boolean = false;

    ngOnInit() {}

    run() {
        this.running = true;
    }
}