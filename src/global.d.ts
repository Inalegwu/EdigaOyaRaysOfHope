declare global {
  type Team = {
    name: string;
    description: string;
    role: string;
    imageUrl?: string;
    slug: string;
  };

  type Timeline = {};
}

export {};
