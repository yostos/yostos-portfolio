"use client";

interface Track {
  id: number;
  title: string;
  artist: string;
  description?: string;
  url: string;
  isPlaying?: boolean;
}

interface TrackListProps {
  tracks: Track[];
  currentTrackId: number;
  onTrackSelect: (track: Track) => void;
}

export default function TrackList({
  tracks,
  currentTrackId,
  onTrackSelect,
}: TrackListProps) {
  return (
    <div className="space-y-2">
      {tracks.map((track) => {
        const isSelected = track.id === currentTrackId;

        return (
          <div
            key={track.id}
            className={`p-4 rounded-lg transition-all cursor-pointer hover:bg-gray-100 ${
              isSelected
                ? "bg-gray-100 border-l-4 border-gray-500 shadow-sm"
                : "border-l-4 border-transparent"
            }`}
            onClick={() => onTrackSelect(track)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3
                  className={`font-bold text-lg ${isSelected ? "text-gray-800" : "text-gray-700"}`}
                >
                  {track.title}
                </h3>
                <p className="text-sm text-gray-600">{track.artist}</p>

                {/* 曲の説明 */}
                {track.description && (
                  <p className="mt-3 text-sm text-gray-700">
                    {track.description}
                  </p>
                )}
              </div>
              <div>
                {isSelected && (
                  <span className="badge bg-gray-600 text-white px-3 py-1 rounded-full text-xs">
                    Selected
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
