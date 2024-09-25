export enum ProgramType {
  CARDIO = 'CARDIO',
  STRENGTH = 'STRENGTH',
  FLEXIBILITY = 'FLEXIBILITY',
  BALANCE = 'BALANCE',
  HIIT = 'HIIT',
  YOGA = 'YOGA',
  PILATES = 'PILATES',
  DANCE = 'DANCE',
  MARTIAL_ARTS = 'MARTIAL_ARTS',
  CROSSFIT = 'CROSSFIT',
}

export const ProgramTypeLabels: Record<ProgramType, string> = {
  [ProgramType.CARDIO]: 'Cardio',
  [ProgramType.STRENGTH]: 'Strength',
  [ProgramType.FLEXIBILITY]: 'Flexibility',
  [ProgramType.BALANCE]: 'Balance',
  [ProgramType.HIIT]: 'HIIT',
  [ProgramType.YOGA]: 'Yoga',
  [ProgramType.PILATES]: 'Pilates',
  [ProgramType.DANCE]: 'Dance',
  [ProgramType.MARTIAL_ARTS]: 'Martial Arts',
  [ProgramType.CROSSFIT]: 'CrossFit',
};

export type Program = {
  id: string;
  name: string;
  description: string;
  type: ProgramType;
  videoUrl: string;
  duration: number; // in seconds
  thumbnailUrl: string;
  totalCalories: number;
};
