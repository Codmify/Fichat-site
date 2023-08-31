
type Prop = {
    path: string
}
const ChatToolTip = ({ path }: Prop) => {
    return (
        <section className="absolute right-0 -left-16 mt-4 hidden group-hover:flex z-50">
            <div className="bg-black w-[20px] h-8 ml-auto mr-2 block -mt-1.5 rotate-45 "></div>
            <div className="bg-black absolute flex justify-center text-[#e2e3e7] items-center py-[8px] rounded-[3px] w-[110px]">
                <p className="text-[12px] font-[700] inline">{path}</p>
                <div className="border-solid border-t-8 border-t-red-600 absolute -top-20"></div>
            </div>
        </section>
    )
}

export default ChatToolTip