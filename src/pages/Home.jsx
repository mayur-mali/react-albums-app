import React from "react";
import Album from "../components/Album";

export default function Home(props) {
  return (
    <div className="grid grid-cols-1 pt-20 max-w-7xl mx-auto gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {props.albums?.map((album, i) => (
        <Album
          key={i}
          deleteAlbumFromList={props.deleteAlbumFromList}
          album={album}
          setUpdateAlbum={props.setUpdateAlbum}
        />
      ))}
    </div>
  );
}
