import { Link } from "react-router-dom";
import { notebooks } from "../data/notebooks"; // O ".." sai da pasta components e entra na data

export default function Anuncios() {
  

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Notebooks mais vendidos
          </h3>
          <p className="text-gray-600 mt-3">
            As melhores configurações para trabalho e estudo com preços
            promocionais.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 lg:grid-cols-2">
            {notebooks.map((item, idx) => (
              <Link to={`/${item.slug}-${item.idx}`}>
                <li key={idx} className="gap-8 sm:flex hover:shadow-md rounded-xl p-4">
                  <div className="w-full h-60">
                    <img
                      src={item.photo}
                      className="w-full h-full object-contain shadow-md rounded-xl"
                      alt=""
                    />
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <h4 className="text-lg text-gray-700 font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {" "}
                      {item.local} 
                      </p>            
                    <p className="text-gray-600 mt-2">
                      {item.description}</p>
                    <div className="mt-4">
                      <p className="text-xl font-bold text-violet-600 leading-tight">
                      {item.price}
                      </p>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
