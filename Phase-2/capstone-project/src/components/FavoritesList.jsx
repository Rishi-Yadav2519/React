import React from "react";
import useData from "../context/DataContext";

const FavoritesList = () => {
  const { favoriteCities, removeFavorite, selectFavorite } = useData();

  return (
    <div className="w-full h-full p-4 lg:mt-[10vh] dark:text-white">
      <p className="text-lg font-semibold mb-3">Favorites</p>
      {favoriteCities.length === 0 ? (
        <p className="text-sm text-neutral-500 dark:text-neutral-300">
          No favorites yet. Add a city from the weather card.
        </p>
      ) : (
        <ul className="flex flex-col gap-2">
          {favoriteCities.map((city) => (
            <li
              key={city.name}
              className="flex items-center justify-between rounded-xl bg-white/70 px-3 py-2 text-sm shadow-sm dark:bg-slate-800"
            >
              <button
                type="button"
                onClick={() => selectFavorite(city.name)}
                className="text-left font-semibold"
              >
                {city.name}
                {city.country ? `, ${city.country}` : ""}
              </button>
              <button
                type="button"
                onClick={() => removeFavorite(city.name)}
                className="text-xs text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;
