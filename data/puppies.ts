export type Puppy = {
  slug: string;
  title: string;
  breed: string;
  sex: 'Boy' | 'Girl' | 'Boy & Girl';
  ageLabel: string;
  origin: 'local' | 'imported';
  hasVideo: boolean;
  image: string;
};

export const WHATSAPP_NUMBER = '971541676733';
export const PHONE_DISPLAY = '+971 54 167 6733';

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Photos are the reference site's listing photos, loaded from its public
// image proxy for this clone demo. All layout, copy structure and code
// in this repo are a fresh re-implementation, not copied source.
export const puppies: Puppy[] = [
  {
    slug: 'maltipoo-max-male',
    title: 'Max',
    breed: 'Maltipoo',
    sex: 'Boy',
    ageLabel: '3 months',
    origin: 'imported',
    hasVideo: true,
    image:
      'https://puppy.instabizweb.com/_next/image?url=%2Fmedia%2FZ0ToauDx7Eve%2F5fffe4d022%2Fb942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp&w=1200&q=75',
  },
  {
    slug: 'korean-teacup-maltipoo-girl',
    title: 'Korean Teacup Maltipoo',
    breed: 'Korean Teacup Maltipoo',
    sex: 'Girl',
    ageLabel: '2 months',
    origin: 'imported',
    hasVideo: true,
    image:
      'https://puppy.instabizweb.com/_next/image?url=%2Fmedia%2FgAaGwoGej2g6%2F5523e884dd%2Fb942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg&w=1200&q=75',
  },
  {
    slug: 'korean-teacup-poodle-girl',
    title: 'Korean Teacup Poodle',
    breed: 'Korean Teacup Poodle',
    sex: 'Girl',
    ageLabel: '2 months',
    origin: 'imported',
    hasVideo: false,
    image:
      'https://puppy.instabizweb.com/_next/image?url=%2Fmedia%2FxeMJCapr5vcU%2Fe618c653b2%2Fb942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg&w=1200&q=75',
  },
  {
    slug: 'maltipoo-cavapoo-boy',
    title: 'Maltipoo & Cavapoo',
    breed: 'Maltipoo & Cavapoo',
    sex: 'Boy',
    ageLabel: '3 months Maltipoo & 2 months Cavapoo',
    origin: 'local',
    hasVideo: true,
    image:
      'https://puppy.instabizweb.com/_next/image?url=%2Fmedia%2FYQhey4j7uWvZ%2F3ea10db6c1%2Fb942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg&w=1200&q=75',
  },
  {
    slug: 'toy-poodle-boy-girl',
    title: 'Toy Poodle',
    breed: 'Toy Poodle',
    sex: 'Boy & Girl',
    ageLabel: '2 months',
    origin: 'local',
    hasVideo: false,
    image:
      'https://puppy.instabizweb.com/_next/image?url=%2Fmedia%2FvMu0BPvkAZ-j%2Fc65e53967d%2Fb942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg&w=1200&q=75',
  },
  {
    slug: 'maltipoo-girl-3-months',
    title: 'Maltipoo',
    breed: 'Maltipoo',
    sex: 'Girl',
    ageLabel: '3 months',
    origin: 'local',
    hasVideo: true,
    image:
      'https://puppy.instabizweb.com/_next/image?url=%2Fmedia%2F3WJNmn6VVgVu%2F732f779474%2Fb942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg&w=1200&q=75',
  },
  {
    slug: 'pomeranian-girl',
    title: 'Pomeranian',
    breed: 'Pomeranian',
    sex: 'Girl',
    ageLabel: '3 months',
    origin: 'local',
    hasVideo: false,
    image:
      'https://puppy.instabizweb.com/_next/image?url=%2Fmedia%2F3yOfnmoyPooH%2F81e0c7e00c%2Fb942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg&w=1200&q=75',
  },
  {
    slug: 'copper-male',
    title: 'Copper',
    breed: 'Cavapoo',
    sex: 'Boy',
    ageLabel: '2 months',
    origin: 'local',
    hasVideo: false,
    image:
      'https://puppy.instabizweb.com/_next/image?url=%2Fmedia%2FO-6w4FYqE10j%2Fbe76f399cc%2Fb942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg&w=1200&q=75',
  },
  {
    slug: 'shih-tzu-girl',
    title: 'Shih Tzu',
    breed: 'Shih Tzu',
    sex: 'Girl',
    ageLabel: '2 months',
    origin: 'local',
    hasVideo: false,
    image:
      'https://puppy.instabizweb.com/_next/image?url=%2Fmedia%2FqNrTCSrsYyzY%2F168fa8c4ff%2Fb942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg&w=1200&q=75',
  },
  {
    slug: 'shih-tzu-boy',
    title: 'Shih Tzu',
    breed: 'Shih Tzu',
    sex: 'Boy',
    ageLabel: '2 months',
    origin: 'local',
    hasVideo: false,
    image:
      'https://puppy.instabizweb.com/_next/image?url=%2Fmedia%2Fcrgs9ih6as_M%2Fe37bafb1bf%2Fb942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg&w=1200&q=75',
  },
  {
    slug: 'maltipoo-girl-2-5-months',
    title: 'Maltipoo',
    breed: 'Maltipoo',
    sex: 'Girl',
    ageLabel: '2.5 months',
    origin: 'local',
    hasVideo: false,
    image:
      'https://puppy.instabizweb.com/_next/image?url=%2Fmedia%2FwNm2_VIBEQvK%2F4b68f59e75%2Fb942a5_7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg&w=1200&q=75',
  },
  {
    slug: 'maltipoo-girl-2-months',
    title: 'Maltipoo',
    breed: 'Maltipoo',
    sex: 'Girl',
    ageLabel: '2 months',
    origin: 'local',
    hasVideo: false,
    image:
      'https://puppy.instabizweb.com/_next/image?url=%2Fmedia%2FlMhASnmIIVQ4%2Fad2353ad31%2Fb942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg&w=1200&q=75',
  },
  {
    slug: 'korean-teacup-pomeranian-girl-1',
    title: 'Korean Teacup Pomeranian',
    breed: 'Korean Teacup Pomeranian',
    sex: 'Girl',
    ageLabel: '2 months',
    origin: 'imported',
    hasVideo: false,
    image:
      'https://puppy.instabizweb.com/_next/image?url=%2Fmedia%2FEsAq2LSRvVCJ%2F4d553ed044%2Fb942a5_a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg&w=1200&q=75',
  },
  {
    slug: 'korean-teacup-pomeranian-girl-2',
    title: 'Korean Teacup Pomeranian',
    breed: 'Korean Teacup Pomeranian',
    sex: 'Girl',
    ageLabel: '2 months',
    origin: 'imported',
    hasVideo: false,
    image:
      'https://puppy.instabizweb.com/_next/image?url=%2Fmedia%2Fvzf7P8SPCZ-Q%2Fa8db4ee114%2Fb942a5_967bb346583b4146acb56607f5da5f21-mv2.jpg&w=1200&q=75',
  },
  {
    slug: 'korean-teacup-pomeranian-boy',
    title: 'Korean Teacup Pomeranian',
    breed: 'Korean Teacup Pomeranian',
    sex: 'Boy',
    ageLabel: '2 months',
    origin: 'imported',
    hasVideo: false,
    image:
      'https://puppy.instabizweb.com/_next/image?url=%2Fmedia%2FnZTGFv46hrZI%2Ffb9eeefc9c%2Fb942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg&w=1200&q=75',
  },
];

export const SHOWROOM_IMAGE =
  'https://puppy.instabizweb.com/_next/image?url=%2Fmedia%2FFHyoHcIosLZE%2F60f6e7e00a%2F27b888_323008bb0f6a41d4bde2a0da7206cd98f000.jpg&w=1200&q=75';
export const MAX_IMAGE = puppies[0].image;
