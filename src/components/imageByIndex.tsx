import { StaticImageData } from 'next/image'
import xmax300 from '../../public/xmax300.jpg'
import bojan from '../../public/bojan.jpg'
import prva1 from '../../public/prva1.jpg'

export const images: StaticImageData[] = [  bojan,prva1, xmax300]

const imageByIndex = (index: number): StaticImageData => images[index % images.length]

export default imageByIndex
