import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userAction";
import { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { resetState } from "../../redux/reducers/user/userSlice";
import { googleLogout } from '@react-oauth/google'

export default function DropDown() {

    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate()

    async function handleLogout() {
        try {
            let data = await dispatch(logout(undefined))
            if (data) {
                googleLogout()
                dispatch(resetState())
                navigate('/company/login')
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Dropdown
            showArrow
            className="rounded-xl shadow-2xl shadow-slate-400 border-2"
            radius="sm"
            classNames={{
                base: "before:bg-default-200", // change arrow background
                content: "p-0 border-small border-divider bg-background",
            }}
        >
            <DropdownTrigger>
                <img
                    // disableRipple
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/11e2517998516c181ac04025690221ae22f5c4e4eb4dee7f65d6fdbaf2f88a9b?apiKey=bf80438c4595450788b907771330b274&"
                    className="shrink-0 w-6 aspect-square "
                />
                {/* <Button variant="ghost" disableRipple>Open Menu</Button> */}
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Custom item styles"
                disabledKeys={["profile"]}
                className="p-3 rounded-sm border-1"
                itemClasses={{
                    base: [
                        "rounded-md",
                        "text-default-500",
                        "transition-opacity",
                        "data-[hover=true]:text-foreground",
                        "data-[hover=true]:bg-default-100",
                        "dark:data-[hover=true]:bg-default-50",
                        "data-[selectable=true]:focus:bg-default-50",
                        "data-[pressed=true]:opacity-70",
                        "data-[focus-visible=true]:ring-default-500",
                    ],
                }}
            >
                <DropdownSection aria-label="Profile & Actions" showDivider>
                    <DropdownItem key="dashboard">
                        Dashboard
                    </DropdownItem>
                </DropdownSection>

                <DropdownSection aria-label="Preferences" showDivider>
                    <DropdownItem
                        isReadOnly
                        key="theme"
                        className="cursor-default"
                        endContent={
                            <select
                                className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
                                id="theme"
                                name="theme"
                            >
                                <option>System</option>
                                <option>Dark</option>
                                <option>Light</option>
                            </select>
                        }
                    >
                        Theme
                    </DropdownItem>
                </DropdownSection>

                <DropdownSection className="hover:cursor-pointer" aria-label="Help & Feedback">
                    <DropdownItem key="logout" className="bg-indigo-600 text-white" onClick={handleLogout}>
                        <button className="font-bold capitalize">
                            Logout
                        </button>
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
}
