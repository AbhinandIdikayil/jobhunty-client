export interface JobApplication {
    _id: string;
    companyId: {
        images?: string,
        _id?:string,
        email?: string,
        name?: string,
        description?: string,
        locations?: string[],
        benefits?: [],
        foundedDate?: string,
        teams?: [],
        techStack?: string[],
        website?: string,
        employees?: string,
        socialLinks?: string[],
        isBlocked?: false,
        LinkedInLink?: string,
    }
    jobId: {
        _id: string,
        jobTitle?: string,
        employment?: string,
        description?: string,
        category?: string,
        joblocation?: string,
        salaryrange?: {
            status?: boolean,
            from?: number,
            to?: number,
        },
        vacancies?: { status?: boolean, available?: number, filled?: number },
        expiry?: Date,
        experience?: number,
        responsibilities?: [string],
        completdJobAdd?: {
            type?: string,
            enum?: ["first", "second"],
        },
        companyId: string,
        skills?: [string],
        qualification?: [string],
        status?: boolean,
        expired?: boolean,
        createdAt?: string,
        updatedAt?: string,
    };
    deleted: boolean;
    userId: {
        _id: string,
        name?: string
        email?: string,
        password?: string,
        role?: string,
        about?: string,
        phonenumber?: string,
        dateofbirth?: Date,
        skills?: string[],
        personalsite?: string,
        socialLink?: string[],
        coverImage?: string,
        icon?: string,
        location?: string,
        currengDesignation?: string,
        resumes?: string[],
        education?: [
            {
                image?: string,
                university: string,
                course: string,
                year: { from: Date, to: Date },
                description?: string,
            },
        ],
        experiences?: [
            {
                working: boolean,
                title: string,
                description: string,
                image: string,
                location: string,
            },
        ],
        certification?: [{ title: string, file: string }]
    };
    hiring_status: string;
    resume: string;
    answers: any[];
    createdAt: string;
    hiring_info: any[];
    mark:number,
    schedule: [
        {
            _id: string,
            testType: string,
            date: string,
            roomId: string,
            time: string,
            status: string,
            feedback: string
        },
    ],
}