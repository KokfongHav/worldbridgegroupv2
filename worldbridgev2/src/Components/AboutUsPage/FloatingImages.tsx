const images = [
  "/Assets/Images/Elements/1.png",
  "/Assets/Images/Elements/2.png",
  "/Assets/Images/Elements/3.png",
  "/Assets/Images/Elements/4.png",
  "/Assets/Images/Elements/5.png",
  "/Assets/Images/Elements/6.png",
  "/Assets/Images/Elements/7.png",
  "/Assets/Images/Elements/8.png",
  "/Assets/Images/Elements/9.png",
  "/Assets/Images/Elements/10.png",
];


const positions = [
  "-left-100 md:top-10 md:left-0",
  "-left-100 md:top-55 md:left-0",
  "top-25 left-5 md:top-30 md:left-34",
  "top-2 left-5 md:top-10 md:left-68",
  "top-11 left-25 md:top-20 md:left-102",
  "top-2 right-45 md:top-10 md:right-102",
  "top-25 right-45 md:top-20 md:right-68",
  "top-11 right-25 md:top-30 md:right-34",
  "top-2 right-5 md:top-10 md:right-0",
  "top-25 right-5 md:top-55 md:right-0",
];

export function FloatingImages() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className={`absolute w-16 rounded-md md:w-32 md:rounded-xl shadow-lg object-cover
            ${positions[i]}
          `}
        />
      ))}
    </div>
  );
}

