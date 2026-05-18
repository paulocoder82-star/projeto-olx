import { useParams } from "react-router-dom";
import { notebooks } from "../data/notebooks";

export default function DetalheAnunciosPage() {
    const { slugId } = useParams();

    const anuncio = notebooks.find(item => `${item.slug}-${item.idx}` === slugId);
    if (!anuncio) return <div>Anúncio não encontrado!</div>;

   return (
        <div className="max-w-4xl mx-auto p-10">
            <img src={anuncio.photo} alt={anuncio.title} className="w-full h-80 object-contain" />
            <h1 className="text-3xl font-bold mt-4">{anuncio.title}</h1>
            <p className="text-2xl text-violet-600 font-bold">{anuncio.price}</p>
            <p className="mt-4 text-gray-700">{anuncio.description}</p>
            <p className="mt-10 text-sm text-gray-400">Local: {anuncio.local}</p>
        </div>
    );
}