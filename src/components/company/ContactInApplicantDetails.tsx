import { Globe, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react';


function ContactInApplicantDetails({email,socialLink}:{email: string,socialLink:string[]}) {
    return (
        <div className="flex flex-col items-start mt-5 w-full text-base leading-relaxed bg-white max-w-[304px]">
            <div className="gap-px self-stretch w-full text-xl font-semibold leading-tight whitespace-nowrap text-slate-800">
                Contact
            </div>
            <div className="flex gap-4 items-start mt-4 whitespace-nowrap">
                <Mail />
                <div className="flex flex-col">
                    <div className="text-slate-500">Email</div>
                    <div className="text-slate-800">{email}</div>
                </div>
            </div>
            <div className="flex gap-4 items-start mt-4">
                <Phone />
                <div className="flex flex-col">
                    <div className="text-slate-500">Phone</div>
                    <div className="text-slate-800">+44 1245 572 135</div>
                </div>
            </div>
            <div className="flex gap-4 items-start mt-4 whitespace-nowrap">
                {
                    socialLink?.[0] && (
                        <>
                            <Instagram />
                            <div className="flex flex-col">
                                <div className="text-slate-500">Instagram</div>
                                <div className="text-indigo-600"> {socialLink[0].substr(12)} </div>
                            </div>
                        </>
                    )
                }
            </div>
            <div className="flex gap-4 items-start mt-4 whitespace-nowrap">
                <Twitter />
                <div className="flex flex-col">
                    <div className="text-slate-500">Twitter</div>
                    <div className="text-indigo-600"> {socialLink?.[1].substr(12)} </div>
                </div>
            </div>
            <div className="flex gap-4 items-start mt-4 whitespace-nowrap">
                <Linkedin />
                <div className="flex flex-col">
                    <div className="text-slate-500">Linked in </div>
                    <div className="text-indigo-600"> {socialLink?.[2].substr(12)} </div>
                </div>
            </div>
            <div className="flex gap-4 items-start mt-4 whitespace-nowrap">
                <Globe />
                <div className="flex flex-col">
                    <div className="text-slate-500">Website</div>
                    <div className="text-indigo-600">www.jeromebell.com</div>
                </div>
            </div>
        </div>
    )
}

export default ContactInApplicantDetails