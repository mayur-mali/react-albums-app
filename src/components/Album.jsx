import React from "react";
import { Link } from "react-router-dom";
export default function Album(props) {
  const { title, id } = props.album;
  return (
    <div className="col-span-1 flex flex-col shadow-md justify-between p-4 border rounded-lg bg-white h-48">
      <h2 className="text-xl font-medium text-slate-700 text-center">
        {title}
      </h2>
      <div className="flex justify-between  items-center">
        <Link
          to={`/update-album/${id}`}
          className="bg-purple-50 hover:bg-purple-200  rounded-lg text-black font-medium capitalize px-4 py-2"
          onClick={() => props.setUpdateAlbum(props.album)}
        >
          update
        </Link>
        <button
          onClick={() => props.deleteAlbumFromList(id)}
          className="bg-blue-50 hover:bg-blue-200 rounded-lg text-black font-medium capitalize px-4 py-2"
        >
          delete
        </button>
      </div>
    </div>
  );
}
