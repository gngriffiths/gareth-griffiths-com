export type Project = {
  slug: string;
  title: string;
  coverImage: string;
  videoEmbedUrl?: string;
  galleryImages: string[];
  info: string;
  description: string;
};

const projectImageFiles = [
  "project (1).jpg",
  "project (2).jpg",
  "project (3).jpg",
  "project (4).jpg",
  "project (5).jpg",
  "project (6).jpg",
  "project (7).jpg",
] as const;

export const projects: Project[] = projectImageFiles.map((file, index) => {
  const number = String(index + 1).padStart(2, "0");
  const coverImage = `/media/project-images/${file}`;

  if (index === 0) {
    return {
      slug: "swatch",
      title: "Swatch",
      coverImage,
      videoEmbedUrl: "https://www.youtube.com/embed/liRVajRCVQ0?rel=0",
      galleryImages: [
        "/media/projects/swatch/swatch-1.png",
        "/media/projects/swatch/swatch-2.png",
      ],
      info:
        "Swatch brings the project together as a single video-led presentation with supporting stills shown underneath.",
      description: "Swatch project preview",
    };
  }

  if (index === 1) {
    return {
      slug: "heineken",
      title: "Heineken",
      coverImage,
      videoEmbedUrl: "https://www.youtube.com/embed/iDPY4ZQyWDo?rel=0",
      galleryImages: [
        "/media/projects/heineken/heineken-1.png",
        "/media/projects/heineken/heineken-2.png",
      ],
      info: "Project information will be added here soon.",
      description: "Heineken project preview",
    };
  }

  if (index === 2) {
    return {
      slug: "hermes",
      title: "Hermes",
      coverImage,
      videoEmbedUrl: "https://www.youtube.com/embed/CGTUjYUM1RU?rel=0",
      galleryImages: [
        "/media/projects/hermes/hermes-1.png",
        "/media/projects/hermes/hermes-2.png",
      ],
      info: "Project information will be added here soon.",
      description: "Hermes project preview",
    };
  }

  if (index === 3) {
    return {
      slug: "intel",
      title: "Intel",
      coverImage,
      videoEmbedUrl: "https://www.youtube.com/embed/RNhTFm8NeKU?rel=0",
      galleryImages: [
        "/media/projects/intel/intel-1.png",
        "/media/projects/intel/intel-2.png",
      ],
      info: "Project information will be added here soon.",
      description: "Intel project preview",
    };
  }

  if (index === 4) {
    return {
      slug: "fiat",
      title: "Fiat",
      coverImage,
      videoEmbedUrl: "https://www.youtube.com/embed/VKkr9eX58R4?rel=0",
      galleryImages: [
        "/media/projects/fiat/fiat-1.png",
        "/media/projects/fiat/fiat-2.png",
      ],
      info: "Project information will be added here soon.",
      description: "Fiat project preview",
    };
  }

  if (index === 5) {
    return {
      slug: "panasonic",
      title: "Panasonic",
      coverImage,
      videoEmbedUrl: "https://www.youtube.com/embed/LTlpigR52Cc?rel=0",
      galleryImages: [
        "/media/projects/panasonic/panasonic-1.png",
        "/media/projects/panasonic/panasonic-2.png",
      ],
      info: "Project information will be added here soon.",
      description: "Panasonic project preview",
    };
  }

  if (index === 6) {
    return {
      slug: "bacardi",
      title: "Bacardi",
      coverImage,
      videoEmbedUrl: "https://www.youtube.com/embed/2OGanXTe9KY?rel=0",
      galleryImages: [
        "/media/projects/bacardi/bacardi-1.png",
        "/media/projects/bacardi/bacardi-2.png",
      ],
      info: "Project information will be added here soon.",
      description: "Bacardi project preview",
    };
  }

  return {
    slug: `project-${number}`,
    title: `Project ${number}`,
    coverImage,
    galleryImages: [coverImage],
    info: "Project information will be added here soon.",
    description: `Project ${number} preview`,
  };
});

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}