export const objectToQueryParam = (obj) => {
  obj["boxes"].map((box, index) => {
    return box.text && (obj[`boxes[${index}][text]`] = box.text);
  });
  delete obj.boxes;
  const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
  return "?" + params.join("&");
};

export const Submit = async (
  template,
  firstRef,
  secondRef,
  thirdRef,
  fourthRef,
  fifthRef,
  objectToQueryParam,
  history,
  e
) => {
  e.preventDefault();
  const params = {
    template_id: template.id,
    username: process.env.REACT_APP_IMGFLIP_USERNAME,
    password: process.env.REACT_APP_IMGFLIP_PASSWORD,
    boxes: [
      {
        text: firstRef?.current?.value,
      },
      {
        text: secondRef?.current?.value,
      },
      {
        text: thirdRef?.current?.value,
      },
      {
        text: fourthRef?.current?.value,
      },
      {
        text: fifthRef?.current?.value,
      },
    ],
  };
  const response = await fetch(
    `https://api.imgflip.com/caption_image${objectToQueryParam(params)}`
  );
  const json = await response.json();
  history.push({
    pathname: "/meme/finish",
    state: json.data.url,
  });
};
