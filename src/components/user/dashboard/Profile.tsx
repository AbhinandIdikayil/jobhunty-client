import { useOutletContext } from 'react-router-dom';
import { prop } from 'src/types/AllTypes';
import UserSocialLinkUpdate from './UserSocialLinkUpdate';
import UserAddtionalDetailsUpdate from './UserAddtionalDetailsUpdate';
import UserAboutMeUpdate from './UserAboutMeUpdate';

function Profile() {
    const context = useOutletContext<prop>() || {};
    const { open } = context;
    return (
        <div className={`flex flex-col ${open ? 'w-5/6' : 'w-full'}max-md:ml-0 max-md:w-full`}>
            <div className="justify-between">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow max-md:mt-6 max-md:max-w-full">
                            <div className="flex flex-col justify-center pb-6 bg-white border border-solid border-zinc-200 max-md:max-w-full">
                                <img
                                    loading="lazy"
                                    srcSet="..."
                                    className="w-full aspect-[5.26] max-md:max-w-full"
                                />
                                <div className="justify-between self-end mt-6 max-w-full w-[524px] max-md:pr-5">
                                    <div className="flex gap-5 max-md:flex-col">
                                        <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow text-lg font-semibold leading-7 text-slate-800 max-md:mt-10">
                                                <div className="text-2xl leading-7">Jake Gyll</div>
                                                <div className="mt-2">
                                                    <span className="text-slate-500">
                                                        Product Designer at
                                                    </span>{" "}
                                                    <span className="font-medium text-slate-800">
                                                        Twitter
                                                    </span>
                                                </div>
                                                <div className="flex gap-2 mt-2 text-slate-500">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae8b37fc26bd1bd5f8e96c86a49789f57c0c966d5c47293a8783eb173a8bf5e3?"
                                                        className="shrink-0 my-auto w-6 aspect-square"
                                                    />
                                                    <div>Manchester, UK</div>
                                                </div>
                                                <div className="flex gap-2.5 justify-center px-6 py-3 mt-2 text-base text-center text-emerald-300 rounded-lg bg-emerald-300 bg-opacity-10 max-md:px-5">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/49168d812fdf6da7a7a7aac95f8d09653973067c39a759a55c09b94fdce7b1dd?"
                                                        className="shrink-0 w-6 aspect-square"
                                                    />
                                                    <div>OPEN FOR OPPORTUNITIES</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
                                            <div className="px-6 py-3 text-base font-bold leading-6 text-center text-indigo-600 border border-indigo-200 border-solid max-md:px-5 max-md:mt-10">
                                                Edit Profile
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col p-6 mt-6 bg-white border border-solid border-zinc-200 max-md:px-5 max-md:max-w-full">
                                <div className="flex gap-4 justify-between max-md:flex-wrap max-md:max-w-full">
                                    <div className="my-auto text-xl font-semibold leading-6 text-slate-800">
                                        About Me
                                    </div>
                                    <div className="flex justify-center items-center p-2.5 border border-solid border-zinc-200">
                                        <UserAboutMeUpdate />
                                    </div>
                                </div>
                                <div className="mt-4 text-base leading-7 text-slate-600 max-md:max-w-full">
                                    I’m a product designer + filmmaker currently working remotely at
                                    Twitter from beautiful Manchester, United Kingdom. I’m
                                    passionate about designing digital products that have a positive
                                    impact on the world.
                                </div>
                                <div className="mt-4 text-base leading-7 text-slate-600 max-md:max-w-full">
                                    For 10 years, I’ve specialised in interface, experience &
                                    interaction design as well as working in user research and
                                    product strategy for product agencies, big tech companies &
                                    start-ups.
                                </div>
                            </div>
                            <div className="flex flex-col px-px py-6 mt-6 bg-white border border-solid border-zinc-200 max-md:max-w-full">
                                <div className="flex gap-4 justify-between px-6 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                                    <div className="my-auto text-xl font-semibold leading-6 text-slate-800">
                                        Experiences
                                    </div>
                                    <div className="flex justify-center items-center p-2 border border-solid border-zinc-200">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ceba105eff85df46b7b79f3292e6cdff2486d0dcdbb379f49fb81a1b8d831e8?"
                                            className="w-6 aspect-square"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-5 justify-between px-6 py-6 bg-white max-md:flex-wrap max-md:px-5">
                                    <img
                                        loading="lazy"
                                        srcSet="..."
                                        className="shrink-0 self-start w-20 aspect-square"
                                    />
                                    <div className="flex flex-col max-md:max-w-full">
                                        <div className="flex gap-1.5 justify-between px-px max-md:flex-wrap max-md:max-w-full">
                                            <div className="my-auto text-lg font-semibold leading-7 text-slate-800">
                                                Product Designer
                                            </div>
                                            <div className="flex justify-center items-center p-2.5 border border-solid border-zinc-200">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ce10734fca792aed29a77e6939d552f3a56b9153161e91719c937203a6057a7?"
                                                    className="w-5 aspect-square"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex gap-2 justify-between self-start mt-2 text-base leading-6 text-slate-600">
                                            <div className="font-medium text-slate-800">Twitter</div>
                                            <div>Full-Time</div>
                                            <div>Jun 2019 - Present (1y 1m)</div>
                                        </div>
                                        <div className="mt-1.5 text-base leading-6 text-slate-500 max-md:max-w-full">
                                            Manchester, UK
                                        </div>
                                        <div className="mt-3 text-base leading-7 text-slate-800 max-md:max-w-full">
                                            Created and executed social media plan for 10 brands
                                            utilizing multiple features and content types to increase
                                            brand outreach, engagement, and leads.
                                        </div>
                                    </div>
                                </div>
                                <div className="shrink-0 max-w-full h-px bg-zinc-200 w-[680px] max-md:mr-1" />
                                <div className="flex gap-5 justify-between px-6 py-6 bg-white max-md:flex-wrap max-md:px-5">
                                    <img
                                        loading="lazy"
                                        srcSet="..."
                                        className="shrink-0 self-start w-20 aspect-square"
                                    />
                                    <div className="flex flex-col max-md:max-w-full">
                                        <div className="flex gap-1.5 justify-between px-px max-md:flex-wrap max-md:max-w-full">
                                            <div className="my-auto text-lg font-semibold leading-7 text-slate-800">
                                                Growth Marketing Designer
                                            </div>
                                            <div className="flex justify-center items-center p-2.5 border border-solid border-zinc-200">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/112686944eefea14f6fb1632e47edea906d7aa4c1077c5fb335d9f1e4ed5bea1?"
                                                    className="w-5 aspect-square"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex gap-2 justify-between self-start mt-2 text-base leading-6 text-slate-600">
                                            <div className="font-medium text-slate-800">GoDaddy</div>
                                            <div>Full-Time</div>
                                            <div>Jun 2011 - May 2019 (8y)</div>
                                        </div>
                                        <div className="mt-1.5 text-base leading-6 text-slate-500 max-md:max-w-full">
                                            Manchester, UK
                                        </div>
                                        <div className="mt-3 text-base leading-7 text-slate-600 max-md:max-w-full">
                                            Developed digital marketing strategies, activation plans,
                                            proposals, contests and promotions for client initiatives
                                        </div>
                                    </div>
                                </div>
                                <div className="self-center text-base font-semibold leading-6 text-center text-indigo-600">
                                    Show 3 more experiences
                                </div>
                            </div>
                            <div className="flex flex-col p-6 mt-6 bg-white border border-solid border-zinc-200 max-md:px-5 max-md:max-w-full">
                                <div className="flex gap-4 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                                    <div className="my-auto text-xl font-semibold leading-6 text-slate-800">
                                        Skills
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex justify-center items-center p-2.5 border border-solid border-zinc-200">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f05b3cf58607a025c3b4ce0904c939ba20980eaf9e9e0c1084676d03b8286e0e?"
                                                className="w-5 aspect-square"
                                            />
                                        </div>
                                        <div className="flex justify-center items-center p-2.5 border border-solid border-zinc-200">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc911093a297f6cfc0af9b9326fab3816df85b14159212cf915bba39f20c8195?"
                                                className="w-5 aspect-square"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 pr-20 mt-4 text-base leading-6 text-indigo-600 max-md:flex-wrap max-md:pr-5">
                                    <div className="px-3 py-1 whitespace-nowrap bg-slate-50">
                                        Communication
                                    </div>
                                    <div className="px-3 py-1 whitespace-nowrap bg-slate-50">
                                        Analytics
                                    </div>
                                    <div className="px-3 py-1 bg-slate-50">Facebook Ads</div>
                                    <div className="px-3 py-1 bg-slate-50">Content Planning</div>
                                </div>
                                <div className="self-start px-3 py-1 mt-4 text-base leading-6 text-indigo-600 bg-slate-50">
                                    Community Manager
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col max-md:mt-6">
                            <div className="flex flex-col p-6 w-full bg-white border border-solid border-zinc-200 max-md:px-5">
                                <div className="flex gap-4 justify-between">
                                    <div className="my-auto text-xl font-semibold leading-6 text-slate-800">
                                        Additional Details
                                    </div>
                                    <div className="flex justify-center items-center p-2.5 border border-solid border-zinc-200">

                                        {/* //!  A MODAL WILL POPUP IF THE EDIT ICON IS CLICKED */}
                                        <UserAddtionalDetailsUpdate />
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4 text-base leading-6 whitespace-nowrap">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0670868732ae275da7e10a4c3ae31088983c5106cc66cb09ceca9215b39cbff?"
                                        className="shrink-0 self-start w-6 aspect-square"
                                    />
                                    <div className="flex flex-col">
                                        <div className="text-slate-500">Email</div>
                                        <div className="text-slate-800">jakegyll@email.com</div>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4 text-base leading-6">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/060ca0b3bd0c9c7b5863e6428825693d71e72563962a30f587ff78a8bb815a2c?"
                                        className="shrink-0 self-start w-6 aspect-square"
                                    />
                                    <div className="flex flex-col">
                                        <div className="text-slate-500">Phone</div>
                                        <div className="text-slate-800">+44 1245 572 135</div>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4 text-base leading-6">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fb878d1eae792629ab7177b5c47f54d1299f0749aed8795dfc0d0fcdf6c9529?"
                                        className="shrink-0 self-start w-6 aspect-square"
                                    />
                                    <div className="flex flex-col">
                                        <div className="text-slate-500">Languages</div>
                                        <div className="text-slate-800">English, French</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col p-6 mt-6 w-full bg-white border border-solid border-zinc-200 max-md:px-5">
                                <div className="flex gap-4 justify-between">
                                    <div className="my-auto text-xl font-semibold leading-6 text-slate-800">
                                        Social Links
                                    </div>
                                    <div className="flex justify-center items-center p-2.5 border border-solid border-zinc-200">

                                    {/* //!  A MODAL WILL POPUP IF THE EDIT ICON IS CLICKED */}
                                        <UserSocialLinkUpdate />
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4 text-base leading-6 whitespace-nowrap">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3af69ab8a7a99a28c1cf29b8278f3551a2cf792ec17da29edc104eca897a333a?"
                                        className="shrink-0 self-start w-6 aspect-square"
                                    />
                                    <div className="flex flex-col">
                                        <div className="text-slate-500">Instagram</div>
                                        <div className="text-indigo-600">instagram.com/jakegyll</div>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4 text-base leading-6 whitespace-nowrap">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ba6645c962d59e4bafbbbd59600a1c2b969f8c37da263d6eb16740b57ad4099?"
                                        className="shrink-0 self-start w-6 aspect-square"
                                    />
                                    <div className="flex flex-col">
                                        <div className="text-slate-500">Twitter</div>
                                        <div className="text-indigo-600">twitter.com/jakegyll</div>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4 text-base leading-6 whitespace-nowrap">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e579c02e97efcc2f382bb6c1038620d5df4b9d04214e2d656bf59df40774097a?"
                                        className="shrink-0 self-start w-6 aspect-square"
                                    />
                                    <div className="flex flex-col">
                                        <div className="text-slate-500">Website</div>
                                        <div className="text-indigo-600">www.jakegyll.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile