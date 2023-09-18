import React, { useState } from "react";

interface ProfileMediaProps {
  imageUrls: string[];
}

const ProfileMedia: React.FC<ProfileMediaProps> = ({ imageUrls }) => {
  const [showAll, setShowAll] = useState(false);
  const maxImagesToShow = 15;

  const visibleImageUrls = showAll
    ? imageUrls
    : imageUrls.slice(0, maxImagesToShow);

  return (
    <div className="h-full w-full space-y-4">
      <div className="flex justify-between">
        <h1 className="uppercase text-sm">media</h1>
        {/* show all */}
        {imageUrls.length > maxImagesToShow && (
          <span
            className="text-sm text-green-500 cursor-pointer"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show All"}
          </span>
        )}
      </div>

      <div className="">
        <div className="flex flex-grow space-x-2">
          {visibleImageUrls.map((imageUrl, index) => (
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="w-16 h-20"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileMedia;
