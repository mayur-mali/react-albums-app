import React, { useEffect, useState } from "react";
import Album from "../components/Album";

export default function Home() {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const fetchAlbum = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/albums");
      const albums = await res.json();
      setAlbums(albums);
    };
    fetchAlbum();
  }, []);

  const deleteAlbumFromList = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "DELETE",
    });
    const newAlbums = this.state.albums.filter((album) => album.id !== id);
    alert("Your Album Deleted successfully");
    setAlbums({
      albums: newAlbums,
    });
  };
  return (
    <div className="grid grid-cols-1 pt-20 max-w-7xl mx-auto gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {albums.map((album, i) => (
        <Album key={i} data={album} />
      ))}
    </div>
  );
}
