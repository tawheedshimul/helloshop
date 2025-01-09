import React, { useState, useEffect } from "react";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [player, setPlayer] = useState(null);

  const songs = [
    { id: "mJxr-tO-XQA", title: "Song 1" },
    { id: "EbdPKtu_9Ww", title: "Song 2" },
    { id: "WWXm39leYew", title: "Song 3" },
    { id: "fHI8X4OXluQ", title: "Song 4" }, // Replace with actual video IDs
  ];

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.async = true;
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      const newPlayer = new window.YT.Player("youtube-audio-player", {
        height: "0",
        width: "0",
        videoId: songs[0].id,
        playerVars: {
          autoplay: 0,
          controls: 0,
        },
        events: {
          onReady: (event) => {
            setPlayer(event.target);
            setCurrentVideo(songs[0].id);
          },
          onError: (error) => {
            console.error("YouTube Player Error:", error);
          },
        },
      });
    };

    return () => {
      document.body.removeChild(tag);
    };
  }, []);

  const togglePlay = () => {
    if (!player) return;
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const changeVideo = (videoId) => {
    if (!player) return;
    player.loadVideoById(videoId);
    setCurrentVideo(videoId);
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="p-6 bg-gray-800 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Modern Audio Player</h2>
        <iframe
          id="youtube-audio-player"
          className="hidden"
          title="YouTube Audio Player"
        ></iframe>
        <div className="flex flex-col space-y-4 mb-6">
          {songs.map((song) => (
            <button
              key={song.id}
              onClick={() => changeVideo(song.id)}
              className={`py-3 px-6 rounded-lg font-medium text-center transition-all ${
                currentVideo === song.id
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {song.title}
            </button>
          ))}
        </div>
        <button
          onClick={togglePlay}
          className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-lg font-bold rounded-lg transition-all"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
