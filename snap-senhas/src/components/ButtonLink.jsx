export default function ButtonLink({children, variante="primary", ...props }){
    const styles = {
        primary: "bg-yellow-500 hover:bg-sky-600",
        secundary: "border-slate-400 border-2 hover:bg-slate-800"
    }

    const varianteClass = `py-2 px-4 rounded ${styles[variante]} `;

    return(
        <a {...props} className={varianteClass}>
            {children}
        </a>
    )

}