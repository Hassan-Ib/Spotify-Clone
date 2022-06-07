import React from "react";
import MusicListing from "./MusicListing";

function AlbumList() {
  return (
    <section className="p-4 pr-0 bg-zinc-700 flex-1">
      <h3 className="my-2 text-white">12 Songs</h3>
      <div>
        <MusicListing />
      </div>
    </section>
  );
}

export default AlbumList;
