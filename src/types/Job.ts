

export type JobReducer = {
    loading: boolean,
    err: null | any,
    jobs: Job[],
    job: Job | null,
}


export interface Job {
    jobTitle: string,
    employment: string,
    description: string,
    category: string,
    joblocation: string,
    salaryrange: {
        status: boolean,
        from: number,
        to: number,
    },
    vacancies: { status: boolean, available: number, filled: number },
    companyId?: string,
    expiry: Date,
    experience: number,
    responsibilities: [string],
    completdJobAdd: {
        type: string,
        enum: ["first", "second"],
    },
    skills: [string],
    qualification: [string],
    status: boolean,
    expired: boolean,
}