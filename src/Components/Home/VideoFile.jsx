const VideoFile = () => {
  return (
    <div className="p-3 p-sm-5">
      <div className="ratio ratio-16x9">
        <iframe
          className="w-100 h-100 rounded-3"
          src="https://www.youtube-nocookie.com/embed/YGMkK6a8SHk?si=OgvKWypcx_KOg4C6"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoFile;
