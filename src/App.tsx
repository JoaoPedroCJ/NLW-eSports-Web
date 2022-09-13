import { MagnifyingGlassPlus } from "phosphor-react";

import "./styles/main.css";

import logoImg from "./assets/logo-nlw-esports.svg";

const games = [
  {
    id: "365295a1-5bba-4fe0-9ddf-48afb74681e9",
    title: "League of Legends",
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    ads: 0,
  },
  {
    id: "a47f17f1-ee34-497e-89c7-fdc3e906d862",
    title: "Valorant",
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    ads: 0,
  },
  {
    id: "f5cb71b4-ca7e-4397-9a70-1a2ee7926f59",
    title: "CS: GO",
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-188x250.jpg",
    ads: 0,
  },
  {
    id: "5e42c4f5-2734-45b0-b881-1c5722b45b3d",
    title: "Fortnite",
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
    ads: 0,
  },
  {
    id: "6a5d0270-96b7-4b99-8a7f-d38eca25a5bd",
    title: "Minecraft",
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
    ads: 0,
  },
  {
    id: "7a02b596-a54f-4405-8447-7b5d29ab4dd1",
    title: "Dota 2",
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg",
    ads: 0,
  },
  {
    id: "9f7f7479-65f9-48b4-a43a-00ca89a519e5",
    title: "Genshin Impact",
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513181-285x380.jpg",
    ads: 0,
  },
  {
    id: "edfba2f6-4ce7-4a34-95f9-5b5111e85a2f",
    title: "Among Us",
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/510218_IGDB-285x380.jpg",
    ads: 0,
  },
  {
    id: "79574f11-818d-44f4-bae0-5b964dd65b88",
    title: "Rust",
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg",
    ads: 0,
  },
  {
    id: "488e005b-0fea-47ba-9f59-85e10c042c50",
    title: "Elden Ring",
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB-285x380.jpg",
    ads: 0,
  },
];

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="eSports NLW" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-nlw-gradient text-transparent bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => (
        <a href="" className="relative rounded-lg overflow-hidden" key={game.id}>
          <img src={game.bannerUrl} />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">
              {game.title}
            </strong>
            <span className="text-zinc-300 text-sm block">{game.ads} anúncios</span>
          </div>
        </a>
        ))}
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
