import ReactPlayer from "react-player/youtube";

export default function MediaCardVideos({ video }: any) {
  return (
    <div className="max-w-[500px]">
      {video.map((items: any, index: number) => (
        <div key={index} className="mb-[33px]">
          <ReactPlayer
            muted={false}
            width={"100%"}
            height="auto"
            url={items?.url}
          />
          <p className="text-center mt-[11px] px-[20px] text-[22px]">
            Warm memories in the cold Viedos.
          </p>
        </div>
      ))}
    </div>
  );
}
