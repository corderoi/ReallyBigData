//
// jobs.service.ts
// ReallyBigData
//
// Created by Ian Cordero on 11/16/17.
//
//

import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { info, logs } from "./jobs-constants";

@Injectable()
export class JobsService {
    private readonly logs = logs;
    private readonly info = info;

    /**
     * Returns info for a job.
     *
     * @param {string} job
     * @returns {Observable<string>}
     */
    fetchInfo(job: string): Observable<string> {
        return Observable
            .timer(3000)
            .map(() => (job in this.info)
                ? this.info[job] : this.info.general);
    }

    /**
     * Returns the running logs for a job.
     *
     * @param {string} job
     * @returns {Observable<string>}
     */
    fetchLogs(job: string): Observable<string> {
        const logs = (job in this.logs)
                ? this.logs[job] : this.logs.general,
            numLogs = logs.length;
        let i = 0;

        return Observable
            .timer(2000, 2000)
            .map(() => {
                if (i === numLogs) {
                    i = 0;
                }
                return logs[i++];
            });
    }
}