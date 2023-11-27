import { Link } from "react-router-dom";


export default function Error() {
    return (
        <section className="h-screen text-white flex flex-col gap-y-4 justify-center items-center">
            <h1 className="text-[1.75rem]">Oops!</h1>
            <p>Page Not Found</p>
            <Link 
            to="/dashboard"
            className="bg-white/80 text-black p-2 rounded-md hover:scale-[1.05]"
            >Back to Dashboard</Link>
        </section>
    )
}
