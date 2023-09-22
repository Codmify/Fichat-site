import React, { useState } from "react";

interface ProfileMediaProps {
  imageUrls: string[];
}

const ProfileMedia: React.FC<ProfileMediaProps> = ({ imageUrls }) => {
  const maxInitialImagesToShow = 3;
  const [visibleImageCount, setVisibleImageCount] = useState(
    maxInitialImagesToShow
  );
  const [isAddingImages, setIsAddingImages] = useState(false);

  const handleShowAll = () => {
    setVisibleImageCount(imageUrls.length);
  };

  const handleAddImages = () => {
    // Logic to handle adding images goes here
    setIsAddingImages(!isAddingImages);
  };

  return (
    <div className="h-full w-full space-y-4">
      <div className="flex justify-between">
        <h1 className="uppercase text-sm">media</h1>
        {imageUrls.length > maxInitialImagesToShow && (
          <span
            className="text-sm text-green-500 cursor-pointer"
            onClick={handleShowAll}
          >
            Show All
          </span>
        )}
      </div>

      <div className="">
        <button onClick={handleAddImages}>
        <div className="flex space-x-1 rounded">
          {imageUrls.slice(0, visibleImageCount).map((imageUrl, index) => (
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="w-[68px] h-20"
              key={index}
            />
          ))}
        </div>
        </button>
      </div>
    </div>
  );
};

export default ProfileMedia;