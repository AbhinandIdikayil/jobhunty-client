

export type JobReducer = {
    loading: boolean,
    err: null | any,
    jobs: Job[],
    job: Job | null,
}


export interface Job {
    _id: string,
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
    createdAt: string,
    updatedAt: string,
}


export interface IListJob {
    _id: string,
    jobTitle: string,
    employment: {
        name: string,
        description: string,
        image: string,
        status: boolean,
    },
    description: string,
    category: {
        name: string,
        image: string,
        isDeleted: boolean,
    },
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
    createdAt: string,
    updatedAt: string,
}


// [
//     {
//         salaryrange: { from: 10, to: 1000 },
//         _id: new ObjectId('66aa69d36ce6bd6ae692b128'),
//         jobTitle: 'full stack developer',
//         employment: {
//             _id: new ObjectId('66a2750bf4949d519b646991'),
//             name: 'remote jobs',
//             description: 'work from home ',
//             image: 'http://res.cloudinary.com/dghv07eag/image/upload/v1721922827/jobhunty/quuhnc33ze9iufoafhzx.jpg',
//             status: false,
//             createdAt: 2024-07 - 25T15: 53: 47.805Z,
//             updatedAt: 2024-07 - 27T12: 18: 35.393Z,
//             __v: 0
//         },
//         description: 'asdfsdf',
//         category: {
//             _id: new ObjectId('66a4be4a76295cfe93cc8080'),
//             name: 'Technology',
//             image: 'http://res.cloudinary.com/dghv07eag/image/upload/v1722072649/jobhunty/sqrcdjgu6xh2logcpdoz.jpg',
//             isDeleted: false,
//             createdAt: 2024-07 - 27T09: 30: 50.978Z,
//             updatedAt: 2024-07 - 27T09: 30: 50.978Z,
//             __v: 0
//         },
//         companyId: new ObjectId('66a869027a30190c84a9e336'),
//         expiry: 2024 -08-03T00:00:00.000Z,
//         responsibilities: ['deploying application', ''],
//         skills: ['communication', ''],
//         qualification: ['need a experience of 0 -2 years', ''],
//         __v: 0
//     }
// ]
