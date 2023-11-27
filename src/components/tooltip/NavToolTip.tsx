
type Prop = {
    path: string
}
const NavToolTip = ({ path }: Prop) => {
    return (
        <section className="absolute pl-14 left-6 hidden xl:group-hover:flex z-50">
            <div className="bg-black relative flex text-[#e2e3e7] items-center py-[6px] px-[10px] rounded-[3px]">
                <p className="text-sm font-[700]">{path}</p>
                <div className="border-solid border-r-black border-r-8 border-y-transparent border-y-[6px] border-l-0 absolute -left-2"></div>
            </div>
        </section>
    )
}

export default NavToolTip