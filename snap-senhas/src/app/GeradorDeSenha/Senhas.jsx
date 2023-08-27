export default function Senhas({ senhas }) {
    const { senha } = senhas
    return (
        <div id="data-row" className="flex justify-between p-2 my-1 rounded cursor-pointer hover:bg-slate-800">
            <div className="flex gap-1">
                <span>{senha}</span>
            </div>
    
        </div>
    )
}