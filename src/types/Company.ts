


export type Company = {
    _id: string,
    name: string,
    email: string,
    password: string,
    description: string,
    contact: string,
    officeLocations: string[],
    joinDate: Date,
    industry: string,
    images: string[],
    employees: String,
    benefits: {
        icon: string;
        headline: string;
        description: string;
    }[],
    foundedDate: Date,
    teams: {
        name: string;
        profile: string;
        designation: string;
    }[],
    techStack: string[],
    website: string,
    coverImage: string,
    approvelStatus: {
        status: string;
        description: string;
    },
    profileCompleted: boolean,
    profileCompletionStatus: "1%" | "2%" | "3%",
    socialLinks: string[],
    icon: string,
    LinkedInLink: string,
    certificate: string,
    registrationId: string,
    isBlocked: boolean
}