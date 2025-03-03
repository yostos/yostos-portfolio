"use client";

import React from "react";

interface TrackInfo {
  id: number;
  title: string;
  artist: string;
  description?: string;
  url: string;
  isPlaying?: boolean;
}

interface SoundCloudPlayerProps {
  track: TrackInfo;
  options?: {
    autoPlay?: boolean;
    hideRelated?: boolean;
    showComments?: boolean;
    showUser?: boolean;
    showReposts?: boolean;
    visual?: boolean;
    color?: string;
    height?: number;
  };
}

export default function SoundCloudPlayer({
  track,
  options = {},
}: SoundCloudPlayerProps) {
  // デフォルトオプションとマージ
  const defaultOptions = {
    autoPlay: false,
    hideRelated: true,
    showComments: false,
    showUser: true,
    showReposts: false,
    visual: false,
    color: "#ff5500",
    height: 166,
  };

  const mergedOptions = { ...defaultOptions, ...options };

  // iframeのURLを構築
  const buildIframeSrc = () => {
    const url = new URL("https://w.soundcloud.com/player/");
    url.searchParams.append("url", track.url);

    // トラックが選択されている場合は自動再生を有効にする
    if (track.isPlaying) {
      url.searchParams.append("auto_play", "true");
    } else if (mergedOptions.autoPlay) {
      url.searchParams.append("auto_play", "true");
    }

    if (mergedOptions.hideRelated)
      url.searchParams.append("hide_related", "true");
    if (mergedOptions.showComments)
      url.searchParams.append("show_comments", "true");
    if (mergedOptions.showUser) url.searchParams.append("show_user", "true");
    if (mergedOptions.showReposts)
      url.searchParams.append("show_reposts", "true");
    if (mergedOptions.visual) url.searchParams.append("visual", "true");
    if (mergedOptions.color)
      url.searchParams.append("color", mergedOptions.color.replace("#", "%23"));

    return url.toString();
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-bold">{track.title}</h3>
          <p className="text-sm text-gray-600">{track.artist}</p>
        </div>

        <div className="mb-4">
          <iframe
            width="100%"
            height={mergedOptions.height}
            scrolling="no"
            frameBorder="no"
            src={buildIframeSrc()}
            title={`SoundCloud Player - ${track.title}`}
            allow="autoplay"
          ></iframe>
        </div>

        {track.description && (
          <div className="mt-3">
            <p className="text-sm text-gray-700">{track.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
