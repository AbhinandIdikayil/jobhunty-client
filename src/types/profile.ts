export interface aboutEdit {
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
            image: string,
            university: string,
            course: string,
            year: { from: Date, to: Date },
            description: string,
        },
    ],
    experiences?: [
        {
            title: string,
            description: string,
            image: string,
            location: string,
        },
    ],
    certification?: [{ title: string, file: string }],
}
