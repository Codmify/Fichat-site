import { Tooltip } from 'flowbite-react';
import { FcGoogle } from "react-icons/fc";
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme = {
  tooltip: {
    arrow: {
      style: {
        dark: "bg-black dark:bg-black",
        light: "bg-black",
        auto: "bg-balck dark:bg-black"
      }
    },
  },
};

interface WithProps {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
    

const SignInWith: React.FC<WithProps> = ({text, onClick}) => {

    return (
        <div className='flex flex-col gap-6 z-20'>
            <div className="inline-flex flex-col items-center justify-center w-full">
                <hr className="w-full h-px my-6 bg-[#333] border-0 dark:bg-gray-700"/>
                <span className="block mt-[-36px] mx-auto px-3 font-medium text-[#adb5bd] bg-[#262626] left-1/2 dark:text-white dark:bg-gray-900 text-sm">{text}</span>
            </div>
            <div className='flex justify-center gap-4 w-full'>
                <Flowbite theme={{ theme: customTheme }}>
                    <Tooltip content="Google" className='bg-black text-sm font-normal py-1 rounded-md'>
                        <a href='#' onClick={onClick} className='block text-sm px-10 rounded py-2.5 bg-[#333]'>
                            <FcGoogle/>
                        </a>
                    </Tooltip>
                </Flowbite>
            </div>
        </div>
    )
};

export default SignInWith;