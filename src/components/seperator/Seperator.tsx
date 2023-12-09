

function Seperator() {
  return (
    <div className="flex items-center gap-6 px-1">
        <div className="w-full max-w-[225px] bg-[rgba(254,254,254,0.200)] border-[1px] border-[rgba(254,254,254,0.200)]"></div>

        <span className="text-xs font-semibold text-[rgba(254,254,254,0.900)]">or</span>

        <div className="w-full max-w-[225px] bg-[rgba(254,254,254,0.200)] border-[1px] border-[rgba(254,254,254,0.200)]"></div>
    </div>
  )
}

export default Seperator