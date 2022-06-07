const PlayerMusicProgress = () => {
  return (
    <section className="flex text-xs font-bold gap-6 items-center">
      {/* current time  */}
      <p>1:24</p>
      {/* progress */}
      <div className="flex-1 h-[.3rem] md:h-[.4rem] bg-white/30 rounded-md overflow-hidden">
        <div className="bg-white h-full w-[60%]"></div>
      </div>
      {/* duration */}
      <p className="opacity-60">3:20</p>
    </section>
  );
};
export default PlayerMusicProgress;
