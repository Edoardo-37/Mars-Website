function VideoEmbed({ videoData }) {
  return (
    <div className="aspect-video w-full" data-aos="zoom-out"
        data-aos-duration="1000">
      <iframe
        src={`${videoData.videoLink}`}
        title={videoData.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full rounded-lg cursor-pointer"
      />
    </div>
  );
}

export default VideoEmbed;
