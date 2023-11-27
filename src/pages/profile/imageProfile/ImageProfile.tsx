import React, { useState } from "react";

const ImageProfile = () => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBackgroundImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {backgroundImage && (
        <div
          className="w-full h-72"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* You can add content here */}
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="rounded-full text-base"
      />
    </div>
  );
};

export default ImageProfile;
