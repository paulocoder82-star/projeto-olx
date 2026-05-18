export default function MeusAnuncios() {
  const notebooks = [
    {
      photo:
        "https://http2.mlstatic.com/D_NQ_NP_2X_914415-MLA106542233680_022026-F.webp",
      title: "Notebook Acer",
      description:
        "Notebook Acer Aspire 5 Ryzen 5 5500u Vega7 8gb Ram 256gb Ssd Cor Prata",
      price:
        "De R$ 4.061, 79 R$2.974,14 com 26% OFF no Pix ou R$3.198 em 10x R$319,80 sem juros",
      slug: "notebook-acer",
      local: "Fortaleza, CE",
      createdAt: "28/08/2026",
    },
    {
      photo:
        "https://http2.mlstatic.com/D_NQ_NP_2X_856473-MLA99505886568_112025-F.webp",
      title: "Notebook Asus Vivobook",
      description:
        "Notebook Asus Vivobook 15.6 Intel Core I3, 8 GB de RAM, SSD de 128 GB, tela Full HD 15.6, Windows 11, cor preta",
      price: "R$ 2.190,74 10x R$219,07 sem juros",
      slug: "notebook-asus-vivobook",
      local: "Fortaleza, CE",
      createdAt: "28/08/2026",
    },
    {
      photo:
        "https://http2.mlstatic.com/D_NQ_NP_2X_634501-MLA99874074933_112025-F.webp",
      title: "Notebook VAIO FE16",
      description:
        "Notebook VAIO FE16 Intel Core i5-1334U  13ª Gen Linux Debian 12  8GB RAM 256GB SSD Tela 16 IPS WUXGA Antirreflexo  Cinza Grafite",
      price: "De R$ 4.999 por R$3.449 com 31% OFF",
      local: "Fortaleza, CE",
      slug: "notebook-vaio-FE16",
      createdAt: "28/08/2026",
    },
    {
      photo:
        "https://http2.mlstatic.com/D_NQ_NP_2X_678582-MLA99572282914_122025-F.webp",
      title: "Notebook Dell Inspiron I15",
      description:
        "Notebook Dell Inspiron I15-i1300-a15p Core 3 8gb 512gb W11 Preto",
      price:
        "De R$3.699 por R$3.332,92 com 9% OFF no Pix ou R$3.436,00 em 10x R$343,60 sem juros",
      local: "Fortaleza, CE",
      slug: "notebook-dell-inspiron-i15",
      createdAt: "28/08/2026",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-xl">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Meus Anúncios
          </h3>
          <p className="text-gray-600 mt-3">
            Aqui você encontra os anúncios publicados por você.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 lg:grid-cols-2">
            {notebooks.map((item, idx) => (
              <Link to={`/${item.slug}-${idx}`}>
                <li key={idx} className="gap-8 sm:flex">
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
                    <p className="text-sm text-gray-500 mt-1"> {item.local}</p>
                    <p className="text-gray-600 mt-2">{item.description}</p>
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
