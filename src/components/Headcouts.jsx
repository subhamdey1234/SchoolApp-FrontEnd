import { CiMenuKebab } from "react-icons/ci";
function HeadCounts({ type, counts }) {
    return (
        <>
            <div style={{
              boxShadow:"0 0 20px black"
            }} className="flex flex-col p-4  bg-gray-800 
            rounded-lg  w-56 h-36 cursor-pointer even:bg-slate-600">
               <div className="flex justify-between items-center w-full text-center">
    <div
        className="flex items-center justify-center text-sm h-6 w-20 p-2 rounded-full bg-slate-50 text-green-500"
    >
        <p className="text-black font-bold">2024/25</p>
    </div>

                    <div>
                        <CiMenuKebab className="text-4xl text-center rotate-90 text-white cursor-pointer" />
                    </div>
                </div>
                <h1 className="text-3xl font-semibold text-yellow-50">{counts}</h1>
                <p className="text-xl text-slate-200">{type}</p>
            </div>
        </>
    )
}
export default HeadCounts