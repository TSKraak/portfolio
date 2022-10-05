import React from "react";

export default function ImageUploader({ uploadPreset, uploadImageUrl }) {
  const myCropWidget = async (event) => {
    event.preventDefault();

    // eslint-disable-next-line no-undef
    const uploadWidget = cloudinary.createUploadWidget(
      {
        cloudName: "leaves-client",
        uploadPreset: uploadPreset,
        folder: uploadPreset,
        cropping: true,
      },

      (error, result) => {
        // console.log(error, result);
        if (result.event === "success") {
          uploadImageUrl(result.info.url);
        }
      }
    );
    uploadWidget.open();
  };

  return (
    <div>
      <button style={{ marginLeft: "15%" }} onClick={myCropWidget}>
        Upload image
      </button>
    </div>
  );
}
