import { FileOpen } from "@mui/icons-material";

const RenderAttachment = (file: any, url: string) => {
  switch (file) {
    case "video":
      return <video src={url} preload="none" width={200} controls />;

    case "image":
      return <img src={url} width={200} alt=" chat image" />;

    case "audio":
      return <audio src={url} preload="none" controls />;

    default:
      return <FileOpen />;
  }
};

export default RenderAttachment;
