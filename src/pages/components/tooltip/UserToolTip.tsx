import { Tooltip } from 'flowbite-react';
import userIcon from "./assets/user-image.jpg"
import User from '../user/User';

import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme = {
    tooltip: {
        style: {
            dark: 'bg-[#3a3a3a] p-0 w-[220px] duration-500',
        },
    },
};

export default function UserToolTip() {
    return (
        <section className="flex gap-2">
            <Flowbite theme={{ theme: customTheme }}>
                <Tooltip content={<User />} style="dark" trigger="click" arrow={false}>
                    <img src={userIcon} alt="User" className="rounded-full w-[20px] md:w-[30px]" />
                </Tooltip>
            </Flowbite>
        </section>
    );
}