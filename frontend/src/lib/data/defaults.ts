export interface CarouselItem {
  title: string
  description: string
  id: number
  image: string
  category: string
}

export interface CarouselProps {
  items?: CarouselItem[]
  baseWidth?: number
  autoplay?: boolean
  autoplayDelay?: number
  pauseOnHover?: boolean
  loop?: boolean
}

export const CATEGORIES = [
  { key: 'tops', label: 'Tops' },
  { key: 'bottoms', label: 'Bottoms' },
  { key: 'shoes', label: 'Shoes' },
  { key: 'outerwear', label: 'Outerwear' },
  { key: 'accessories', label: 'Accessories' },
] as const

export type CategoryKey = (typeof CATEGORIES)[number]['key']

export function getItemsByCategory(category: string): CarouselItem[] {
  return DEFAULT_ITEMS.filter(item => item.category === category)
}

export const DEFAULT_ITEMS: CarouselItem[] = [
  // Tops
  {
    title: 'Classic White Tee',
    description: 'Essential white cotton t-shirt',
    id: 1,
    image: 'https://loremflickr.com/300/400/tshirt,white?lock=1',
    category: 'tops',
  },
  {
    title: 'Blue Oxford Shirt',
    description: 'Casual button-down shirt',
    id: 2,
    image: 'https://loremflickr.com/300/400/shirt,oxford?lock=2',
    category: 'tops',
  },
  {
    title: 'Black Hoodie',
    description: 'Comfortable pullover hoodie',
    id: 3,
    image: 'https://loremflickr.com/300/400/hoodie,black?lock=3',
    category: 'tops',
  },
  // Bottoms
  {
    title: 'Blue Jeans',
    description: 'Classic denim jeans',
    id: 4,
    image: 'https://loremflickr.com/300/400/jeans,denim?lock=4',
    category: 'bottoms',
  },
  {
    title: 'Chino Pants',
    description: 'Smart casual trousers',
    id: 5,
    image: 'https://loremflickr.com/300/400/chinos,pants?lock=5',
    category: 'bottoms',
  },
  {
    title: 'Black Shorts',
    description: 'Summer cotton shorts',
    id: 6,
    image: 'https://loremflickr.com/300/400/shorts,black?lock=6',
    category: 'bottoms',
  },
  // Shoes
  {
    title: 'White Sneakers',
    description: 'Clean casual sneakers',
    id: 7,
    image: 'https://loremflickr.com/300/400/sneakers,white?lock=7',
    category: 'shoes',
  },
  {
    title: 'Brown Boots',
    description: 'Leather ankle boots',
    id: 8,
    image: 'https://loremflickr.com/300/400/boots,leather?lock=8',
    category: 'shoes',
  },
  {
    title: 'Black Dress Shoes',
    description: 'Formal leather shoes',
    id: 9,
    image: 'https://loremflickr.com/300/400/dress,shoes?lock=9',
    category: 'shoes',
  },
  // Outerwear
  {
    title: 'Denim Jacket',
    description: 'Classic blue denim jacket',
    id: 10,
    image: 'https://loremflickr.com/300/400/denim,jacket?lock=10',
    category: 'outerwear',
  },
  {
    title: 'Wool Coat',
    description: 'Warm winter overcoat',
    id: 11,
    image: 'https://loremflickr.com/300/400/wool,coat?lock=11',
    category: 'outerwear',
  },
  {
    title: 'Windbreaker',
    description: 'Lightweight rain jacket',
    id: 12,
    image: 'https://loremflickr.com/300/400/windbreaker?lock=12',
    category: 'outerwear',
  },
  // Accessories
  {
    title: 'Leather Belt',
    description: 'Classic leather belt',
    id: 13,
    image: 'https://loremflickr.com/300/400/leather,belt?lock=13',
    category: 'accessories',
  },
  {
    title: 'Wool Scarf',
    description: 'Warm knitted scarf',
    id: 14,
    image: 'https://loremflickr.com/300/400/scarf,knit?lock=14',
    category: 'accessories',
  },
  {
    title: 'Baseball Cap',
    description: 'Casual cotton cap',
    id: 15,
    image: 'https://loremflickr.com/300/400/baseball,cap?lock=15',
    category: 'accessories',
  },
]
