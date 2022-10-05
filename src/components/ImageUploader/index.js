import React from "react";

export default function ImageUploader({ uploadPreset, uploadImageUrl }) {
  const myCropWidget = () => {
    // eslint-disable-next-line no-undef
    const uploadWidget = cloudinary.createUploadWidget(
      {
        cloudName: "leaves-client",
        uploadPreset: uploadPreset,
        folder: uploadPreset,
        cropping: false,
      },

      (error, result) => {
        if (result.event === "success") {
          uploadImageUrl(result.info.url);
        }
      }
    );
    uploadWidget.open();
  };

  return (
    <div>
      <button onClick={myCropWidget}>Upload picture</button>
    </div>
  );
}
