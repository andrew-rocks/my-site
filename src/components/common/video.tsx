import React from "react";

interface VideoProps {
  src: string;
  width?: string;
  height?: string;
}

const Video: React.FC<VideoProps> = ({
  src,
  width = "800",
  height = "500",
}) => {
  return (
    <div className="flex items-center justify-center">
      <iframe
        className="pt-5"
        src={src}
        title="Video Player"
        width={width}
        height={height}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
