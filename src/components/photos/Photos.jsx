import React from "react";
import cl from "./Photos.module.css";
import { useState, useEffect } from "react";

const cats = [
  { name: "Все" },
  { name: "Море" },
  { name: "Горы" },
  { name: "Архитектура" },
  { name: "Города" },
];

function Collection({ name, images }) {
  return (
    <div className={cl.collection}>
      <img className={cl.collection__big} src={images[0]} alt="Item" />
      <div className={cl.collection__bottom}>
        <img className={cl.collection__mini} src={images[1]} alt="Item" />
        <img className={cl.collection__mini} src={images[2]} alt="Item" />
        <img className={cl.collection__mini} src={images[3]} alt="Item" />
      </div>
      <h4 className={cl.H4}>{name}</h4>
    </div>
  );
}

function Photos() {
  const [categoryId, setCategoryId] = useState(0);
  const [collections, setCollections] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    const category = categoryId ? `category=${categoryId}` : "";

    fetch(
      `https://655a26db6981238d054d2ff2.mockapi.io/photoCollection2?page=${page}&limit=2&${category}`
    )
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении данных");
      })
      .finally(() => setIsLoading(false));
  }, [categoryId, page]);
  return (
    <div className={cl.Photos}>
      <h1 className={cl.H1}>Моя коллекция фотографий</h1>
      <div className={cl.top}>
        <ul className={cl.tags}>
          {cats.map((obj, i) => (
            <li
              onClick={() => setCategoryId(i)}
              className={categoryId === i ? cl.active : " "}
              key={obj.name}
            >
              {obj.name}
            </li>
          ))}
        </ul>
      </div>

      <div className={cl.content}>
        {isLoading ? (
          <h2>Идет загрузка</h2>
        ) : (
          collections
            .filter((obj) => {
              return obj.name.toLowerCase().includes(searchValue.toLowerCase());
            })
            .map((obj, index) => (
              <Collection key={index} name={obj.name} images={obj.photos} />
            ))
        )}
      </div>

      <ul className={cl.pagination}>
        {[...Array(6)].map((_, i) => (
          <li
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? cl.active : ""}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Photos;
