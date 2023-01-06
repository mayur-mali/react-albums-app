import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function AddAlbum(props) {
  const userId = useRef();
  const albumTitle = useRef();

  return (
    <div className="flex justify-center items-center pt-28">
      <div className="max-w-lg p-8 mx-auto w-full py-6 bg-white border rounded-lg">
        <form className="space-y-4">
          <div className="space-y-3">
            <label className="text-xl font-medium" htmlFor="userId">
              Enter User Id
            </label>
            <input
              className="px-4 py-2 w-full border rounded-lg focus:outline-none"
              type="number"
              name="userid"
              id="userId"
              ref={userId}
              required
              placeholder="enter user id"
            />
          </div>
          <div className="space-y-3">
            <label className="text-xl font-medium" htmlFor="album-item">
              Enter Album Title
            </label>
            <input
              className="px-4 py-2 w-full border rounded-lg focus:outline-none"
              type="text"
              name="title"
              id="album-item"
              ref={albumTitle}
              required
              placeholder="enter album title"
            />
          </div>
          <div>
            <Link to="/">
              <button
                className="px-4 py-2 w-full border rounded-lg bg-slate-100 font-medium hover:bg-slate-800 hover:text-white cursor-pointer"
                onClick={() =>
                  props.addAlbumToList(
                    Number(userId.current.value),
                    albumTitle.current.value
                  )
                }
              >
                Add Album
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
