import { Program, ProgramType } from '@customTypes/program';
import { getRandomSeconds } from '@utils/helpers';

export const Programs: Program[] = [
  {
    id: '1',
    name: 'Morning Cardio Blast',
    description: 'A quick cardio session to start your day.',
    type: ProgramType.CARDIO,
    videoUrl:
      'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    thumbnailUrl: 'https://picsum.photos/200',
    duration: getRandomSeconds(),
    totalCalories: 300,
  },
  {
    id: '2',
    name: 'Strength Training Basics',
    description: 'Introduction to strength training.',
    type: ProgramType.STRENGTH,
    videoUrl:
      'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    thumbnailUrl: 'https://picsum.photos/200',
    duration: getRandomSeconds(),
    totalCalories: 400,
  },
  {
    id: '3',
    name: 'Flexibility for Beginners',
    description: 'Basic flexibility exercises.',
    type: ProgramType.FLEXIBILITY,
    videoUrl:
      'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    thumbnailUrl: 'https://picsum.photos/200',
    duration: getRandomSeconds(),
    totalCalories: 150,
  },
  {
    id: '4',
    name: 'Balance and Stability',
    description: 'Improve your balance and stability.',
    type: ProgramType.BALANCE,
    videoUrl:
      'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    thumbnailUrl: 'https://picsum.photos/200',
    duration: getRandomSeconds(),
    totalCalories: 200,
  },
  {
    id: '5',
    name: 'HIIT Workout',
    description: 'High-intensity interval training.',
    type: ProgramType.HIIT,
    videoUrl:
      'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    thumbnailUrl: 'https://picsum.photos/200',
    duration: getRandomSeconds(),
    totalCalories: 350,
  },
  {
    id: '6',
    name: 'Yoga for Relaxation',
    description: 'Relaxing yoga session.',
    type: ProgramType.YOGA,
    videoUrl:
      'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    thumbnailUrl: 'https://picsum.photos/200',
    duration: getRandomSeconds(),
    totalCalories: 250,
  },
  {
    id: '7',
    name: 'Pilates Core Workout',
    description: 'Strengthen your core with Pilates.',
    type: ProgramType.PILATES,
    videoUrl:
      'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    thumbnailUrl: 'https://picsum.photos/200',
    duration: getRandomSeconds(),
    totalCalories: 300,
  },
  {
    id: '8',
    name: 'Dance Cardio',
    description: 'Fun dance cardio workout.',
    type: ProgramType.DANCE,
    videoUrl:
      'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    thumbnailUrl: 'https://picsum.photos/200',
    duration: getRandomSeconds(),
    totalCalories: 400,
  },
  {
    id: '9',
    name: 'Martial Arts Basics',
    description: 'Introduction to martial arts.',
    type: ProgramType.MARTIAL_ARTS,
    videoUrl:
      'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    thumbnailUrl: 'https://picsum.photos/200',
    duration: getRandomSeconds(),
    totalCalories: 450,
  },
  {
    id: '10',
    name: 'CrossFit Challenge',
    description: 'Intense CrossFit workout.',
    type: ProgramType.CROSSFIT,
    videoUrl:
      'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    thumbnailUrl: 'https://picsum.photos/200',
    duration: getRandomSeconds(),
    totalCalories: 500,
  },
  {
    id: '11',
    name: 'Advanced Cardio',
    description: 'Advanced level cardio exercises.',
    type: ProgramType.CARDIO,
    videoUrl:
      'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    thumbnailUrl: 'https://picsum.photos/200',
    duration: getRandomSeconds(),
    totalCalories: 350,
  },
  {
    id: '12',
    name: 'Strength Training Advanced',
    description: 'Advanced strength training.',
    type: ProgramType.STRENGTH,
    videoUrl:
      'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    thumbnailUrl: 'https://picsum.photos/200',
    duration: getRandomSeconds(),
    totalCalories: 450,
  },
  {
    id: '13',
    name: 'Flexibility Advanced',
    description: 'Advanced flexibility exercises.',
    type: ProgramType.FLEXIBILITY,
    videoUrl:
      'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    thumbnailUrl: 'https://picsum.photos/200',
    duration: getRandomSeconds(),
    totalCalories: 200,
  },
  {
    id: '14',
    name: 'Balance Advanced',
    description: 'Advanced balance exercises.',
    type: ProgramType.BALANCE,
    videoUrl:
      'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    thumbnailUrl: 'https://picsum.photos/200',
    duration: getRandomSeconds(),
    totalCalories: 250,
  },
  {
    id: '15',
    name: 'HIIT Advanced',
    description: 'Advanced high-intensity interval training.',
    type: ProgramType.HIIT,
    videoUrl:
      'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    thumbnailUrl: 'https://picsum.photos/200',
    duration: getRandomSeconds(),
    totalCalories: 500,
  },
];
