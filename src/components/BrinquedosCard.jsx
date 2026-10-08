
const BrinquedosCard = ({ titulo, preco, imagem }) => {
    return (
        <div className="group relative overflow-hidden rounded-[28px] border border-blue-400/30 bg-slate-950 shadow-[0_18px_45px_rgba(14,165,233,0.18)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_22px_55px_rgba(59,130,246,0.35)]">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-blue-600/20 opacity-80" />

            <img
                src={imagem}
                alt={titulo}
                className="relative h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <article className="relative space-y-4 p-5 text-center">
                <span className="inline-block rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Destaque
                </span>

                <h2 className="text-xl font-black uppercase tracking-wide text-blue-500">{titulo}</h2>

                <p className="text-2xl font-bold text-white">{preco}</p>

                <button className="w-full rounded-[18px] bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 px-5 py-3 font-bold text-slate-950 shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] hover:from-cyan-300 hover:via-blue-400 hover:to-blue-600 hover:text-white">
                    Comprar
                </button>
            </article>
        </div>
    )
}

export default BrinquedosCard