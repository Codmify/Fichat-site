import React, { useState } from "react";

interface ProfileMediaProps {
  imageUrls: string[];
}

const ProfileMedia: React.FC<ProfileMediaProps> = ({ imageUrls }) => {
  const maxInitialImagesToShow = 3;
  const [visibleImageCount, setVisibleImageCount] = useState(
    maxInitialImagesToShow
  );
  // const [isAddingImages, setIsAddingImages] = useState(false);

  const handleShowAll = () => {
    setVisibleImageCount(imageUrls.length);
  };

  return (
    <div className="h-full w-full space-y-4 pb-10">
      <div className="flex justify-between ">
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
        <div className="flex space-x-2 ">
          {imageUrls.slice(0, visibleImageCount).map((imageUrl, index) => (
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="w-[68px] lg:w-[4.5rem] h-20 rounded"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileMedia;
