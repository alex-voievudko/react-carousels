// slides.ts
import Image1 from '../../assets/images/overwatch.jpg'
import Image2 from '../../assets/images/fortnite.jpg'
import Image3 from '../../assets/images/raid.jpg'
import Image4 from '../../assets/images/lol.jpg'
import Image5 from '../../assets/images/clash-of-clans.jpg'

export type Slide = {
  id: string
  image: string
  title?: string
  description?: string
}

export const SLIDES: Slide[] = [
  {
    id: '1',
    image: Image1,
    title: 'Overwatch',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: '2',
    image: Image2,
    title: 'Fortnite',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: '3',
    image: Image3,
    title: 'Raid: Shadow Legends',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: '4',
    image: Image4,
    title: 'League of Legends',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: '5',
    image: Image5,
    title: 'Clash of Clans',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
]
