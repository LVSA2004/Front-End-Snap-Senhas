export default function InputText({label, id, ...props}){
    return(
        <div className="flex flex-col gap-3 my-2">
            <label htmlFor={id} className=" bg-yellow-500  rounded-3xl flex justify-around text-3xl">
                {label}
            </label>
            <input 
                className="bg-zinc-300 rounded p-2 outline-none" 
                type="text" 
                id={id} 
                {...props}
            />
        </div>
    )
}