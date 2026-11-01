export type ServicePhoto = {
  src: string;
  alt: string;
  label: string;
  wide?: boolean;
  position?: string;
};

export type ServicePageContent = {
  slug: string;
  base: string;
  hero: {
    image: string;
    alt: string;
    eyebrow: string;
    title: string;
    emphasis: string;
    titleLeadClassName?: string;
    emphasisClassName?: string;
    description: string;
    primaryAction: string;
    galleryAction: string;
    titleClassName: string;
    contentClassName: string;
    descriptionClassName: string;
    containerClassName: string;
    imageClassName: string;
    overlayClassName: string;
  };
  story?: {
    image: string;
    alt: string;
    eyebrow: string;
    eyebrowPosition: "image" | "text";
    title: string;
    description: string;
    titleClassName: string;
    columnsClassName: string;
    imageOrderClassName: string;
    textOrderClassName: string;
    imagePosition?: string;
  };
  gallery: {
    id: string;
    eyebrow: string;
    title: string;
    photos: readonly ServicePhoto[];
    mobileVisibleCount: number;
    desktopColumns: 3 | 4 | 6;
    centerLastPair?: boolean;
    headingMarginClassName: string;
    gridGapClassName: string;
  };
  closing: {
    photos?: readonly [Pick<ServicePhoto, "src" | "alt">, Pick<ServicePhoto, "src" | "alt">];
    eyebrow: string;
    title: string;
    description: string;
    action: string;
    titleClassName: string;
  };
};
