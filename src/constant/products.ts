export type ConstantProduct = {
  id: number;
  name: string;
  brand: string;
  price: number;
  thumbnail: string;
  model: string;
};

export const PRODUCTS: Record<string, ConstantProduct[]> = {
  sunglass1: [
    {
      id: 3,
      name: "Wayfarer Black",
      brand: "Sunglasses",
      price: 3990,
      thumbnail: "/deepar/effects/sunglass/wayfarer_black.png",
      model: "/deepar/effects/sunglass/wayfarer_black.bin",
    },
    {
      id: 2,
      name: "Round Metal",
      brand: "Sunglasses",
      price: 3990,
      thumbnail: "/deepar/effects/sunglass/round_metal.png",
      model: "/deepar/effects/sunglass/round_metal.bin",
    },
  ],
  sunglass2: [
    {
      id: 1,
      name: "Butterfly Blue",
      brand: "Sunglasses",
      price: 3990,
      thumbnail: "/deepar/effects/sunglass/chanel_butterfly.png",
      model: "/deepar/effects/sunglass/chanel_butterfly.bin",
    },
    {
      id: 4,
      name: "Habana Brown",
      brand: "Sunglasses",
      price: 3990,
      thumbnail: "/deepar/effects/sunglass/wayfarer_habana.png",
      model: "/deepar/effects/sunglass/wayfarer_habana.bin",
    },
  ],
  eyeglass1: [
    {
      id: 5,
      name: "Honey Yellow",
      brand: "Eyeglasses",
      price: 3990,
      thumbnail: "/deepar/effects/eyeglass/barner_honey.png",
      model: "/deepar/effects/eyeglass/barner_honey.bin",
    },
    {
      id: 7,
      name: "Reading Black",
      brand: "Eyeglasses",
      price: 3990,
      thumbnail: "./deepar/effects/eyeglass/wayfarer_reading.png",
      model: "/deepar/effects/eyeglass/wayfarer_reading.bin",
    },
  ],
  eyeglass2: [
    {
      id: 6,
      name: "Wayfarer White",
      brand: "Eyeglass",
      price: 3990,
      thumbnail: "/deepar/effects/eyeglass/clubmaster_transparent.png",
      model: "/deepar/effects/eyeglass/clubmaster_transparent.bin",
    },
    {
      id: 8,
      name: "Club Master Gold",
      brand: "Eyeglass",
      price: 3990,
      thumbnail: "./deepar/effects/eyeglass/wayfarer_transparent.png",
      model: "/deepar/effects/eyeglass/wayfarer_transparent.bin",
    },
  ],
};
