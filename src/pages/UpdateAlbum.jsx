import React, { useRef } from "react";
import { Link } from "react-router-dom";
export default function UpdateAlbum(props) {
  let updateUserid = useRef();
  let updateTitle = useRef();
  const getUpdateData = () => {
    const id = props.album.id;

    if (updateTitle.current.value === "") {
      updateTitle.current.value = props.album.title;
    }
    if (updateUserid.current.value === "") {
      updateUserid.current.value = props.album.userId;
    }
    props.updateAlbumInList(
      id,
      updateTitle.current.value,
      Number(updateUserid.current.value),
      props.album
    );
  };

  return (
    <div className="flex justify-center items-center pt-28">
      <div className="max-w-lg p-8 mx-auto w-full py-6 bg-white border rounded-lg">
        <form className="space-y-4">
          <div className="space-y-3">
            <label className="text-xl font-medium" htmlFor="userId">
              Enter New User Id
            </label>
            <input
              className="px-4 py-2 w-full border rounded-lg focus:outline-none"
              type="number"
              name="userid"
              id="userId"
              required
              ref={updateUserid}
              placeholder="enter user id"
            />
          </div>
          <div className="space-y-3">
            <label className="text-xl font-medium" htmlFor="album-item">
              Enter New Album Title
            </label>
            <input
              className="px-4 py-2 w-full border rounded-lg focus:outline-none"
              type="text"
              name="title"
              id="album-item"
              required
              ref={updateTitle}
              placeholder="enter album title"
            />
          </div>
          <div>
            <Link to="/">
              <input
                type="button"
                value="Update Album"
                onClick={getUpdateData}
                className="px-4 py-2 w-full border rounded-lg bg-slate-100 font-medium hover:bg-slate-800 hover:text-white cursor-pointer"
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
