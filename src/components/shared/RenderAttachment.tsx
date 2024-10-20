import { FileOpen } from "@mui/icons-material";
import ReactPlayer from "react-player/lazy";
const RenderAttachment = (
  file: any,
  url: string,
  widthValue = "200",
  heightValue = "200",
  autoPlay = false
) => {
  switch (file) {
    case "video":
      return (
        <ReactPlayer
          url={url}
          width="100%"
          height="300px"
          playing={autoPlay}
          muted
          loop
          controls
        />
      );

    case "image":
      return (
        <img
          loading="lazy"
          src={url}
          className={`rounded-[8px] h-[${heightValue}]    object-cover`}
          width={widthValue}
          alt=" chat image"
        />
      );

    case "audio":
      return <audio src={url} preload="none" controls />;

    default:
      return <FileOpen />;
  }
};

export default RenderAttachment;
