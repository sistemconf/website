export type Speaker = {
  name: string;
  jobTitle: string;
  talkTitle: string;
  talkDescription: string;
  bio: string;
  linkedin: string;
  image: {
    url: string;
    alt: string;
  };
};

export type SpeakersProps = {
  speakers: Speaker[];
};
