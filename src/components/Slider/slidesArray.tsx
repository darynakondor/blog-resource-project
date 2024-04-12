export type Slide = {
    id: number
    slideImg: string
    slideTitle1: string
    slideTitle2: string
    slideDate: number
    slideText: string
}

const slidesArray: Slide[] = [
    {
        id: 1,
        slideImg: '/images/main/drifting-together.jpg',
        slideTitle1: 'Drifting Apart,',
        slideTitle2: 'Growing Happy',
        slideDate: 6,
        slideText:
            'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate...',
    },
    {
        id: 2,
        slideImg: '/images/main/honing-the-craft.jpg',
        slideTitle1: 'Honing The Craft',
        slideTitle2: 'to Perfection',
        slideDate: 6,
        slideText:
            'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate...',
    },
    {
        id: 3,
        slideImg: '/images/main/hunting-for-words.jpg',
        slideTitle1: 'Hunting for the',
        slideTitle2: 'Right Words',
        slideDate: 6,
        slideText:
            'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate...',
    },
]

export default slidesArray

export const getSlideObject = (array: Slide[]) => {
    return array.reduce(
        (object, slide) => ({
            ...object,
            [slide.id]: slide,
        }),
        {}
    )
}
