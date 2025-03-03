"use client";

import { useState } from "react";
import SoundCloudPlayer from "@/components/SoundCloudPlayer";
import TrackList from "@/components/TrackList";

// トラックのデータ型
interface Track {
  id: number;
  title: string;
  artist: string;
  description?: string;
  url: string;
  isPlaying?: boolean;
}

export default function MusicPage() {
  // トラックのデータ
  const [tracks, setTracks] = useState<Track[]>([
    {
      id: 1,
      title: "Seven Goblins",
      artist: "Toshiyuki Yoshida",
      description:
        "子供の頃不思議だった冒頭の「Goblin,Goblin 」が、Macで簡単に実現。ギターは指が攣りそう。",
      url: "https://soundcloud.com/yostos/seven-goblins",
      isPlaying: false,
    },
    {
      id: 2,
      title: "Feedback's Feel",
      artist: "Toshiyuki Yoshida",
      description:
        "２つのギターの掛け合い。この曲のためだけに、BOSS DF-2を購入。",
      url: "https://soundcloud.com/yostos/feedbacks-feel",
      isPlaying: true,
    },
    {
      id: 3,
      title: "SPACE WAGON",
      artist: "Toshiyuki Yoshida",
      description:
        "シンセのアレンジと、ディストーション＋コーラスのギターが80年代風で弾いていて懐かしい。",
      url: "https://soundcloud.com/yostos/space-wagon",
      isPlaying: false,
    },
    {
      id: 4,
      title: "Moon River",
      artist: "Toshiyuki Yoshida",
      description:
        "Epiphon Texanで語り弾き風。コーラスは適当にアレンジしました。",
      url: "https://soundcloud.com/yostos/moon-river-1",
      isPlaying: false,
    },
    {
      id: 5,
      title: "Discipline",
      artist: "Toshiyuki Yoshida",
      description: "ギター２本で人間シーケンサーになる。",
      url: "https://soundcloud.com/yostos/discipline",
      isPlaying: false,
    },
    {
      id: 6,
      title: "フラッシュバッカー",
      artist: "Toshiyuki Yoshida",
      description:
        "プロモーションフィルムがかっこよかったので、コピーしてみた。",
      url: "https://soundcloud.com/yostos/flashbacker",
      isPlaying: false,
    },
  ]);

  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[0]);

  // トラックを選択する関数
  const handleTrackSelect = (selectedTrack: Track) => {
    // 現在のトラックと同じ場合は何もしない
    if (selectedTrack.id === currentTrack.id) return;

    // 全てのトラックの再生状態を更新
    const updatedTracks = tracks.map((track) => ({
      ...track,
      isPlaying: track.id === selectedTrack.id,
    }));

    setTracks(updatedTracks);
    setCurrentTrack(selectedTrack);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Music Works</h1>

      {/* SoundCloudプレーヤー */}
      <div className="max-w-3xl mx-auto mb-16">
        <SoundCloudPlayer
          track={currentTrack}
          options={{
            autoPlay: false,
            showUser: true,
            color: "#ff7700",
          }}
        />
      </div>

      {/* トラックリスト */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">トラックリスト</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <TrackList
            tracks={tracks}
            currentTrackId={currentTrack.id}
            onTrackSelect={handleTrackSelect}
          />
        </div>
      </div>
    </div>
  );
}
