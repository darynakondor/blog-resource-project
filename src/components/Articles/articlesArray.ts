export type Article = {
    id: number
    name1: string
    name2: string
    author: string
    category: string
    date: number
    image: string
    text: string
    numberOfComments: number
    goToPageCategory: string
    slide?: string
    paragraphArticlePage_1: string
    paragraphArticlePage_2: string
    quoteArticlePage_1: string
    quoteArticlePage_2: string
    imageArticlePage: string
}

const articlesArray: Article[] = [
    {
        id: 1,
        name1: 'Taking Over',
        name2: 'Street Fashion',
        author: 'Susanna Roberts',
        category: 'lifestyle',
        date: 6,
        image: '/images/main/take-over-the-streets.jpg',
        text: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit....',
        numberOfComments: 2,
        goToPageCategory: '/category/lifestyle',
        paragraphArticlePage_1:
            'orem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui.',
        paragraphArticlePage_2:
            'Lorem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui. Risus atque amet dignissim, est elit.',
        quoteArticlePage_1:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced technology.',
        quoteArticlePage_2:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced.',
        imageArticlePage: '/images/main/blog-single-image1.jpg',
    },
    {
        id: 2,
        name1: 'Knowledge',
        name2: '& Beauty',
        author: 'Susanna Roberts',
        category: 'living',
        date: 6,
        image: '/images/main/know-what-matters.jpg',
        text: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit....',
        numberOfComments: 2,
        goToPageCategory: '/category/living',
        paragraphArticlePage_1:
            'orem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui.',
        paragraphArticlePage_2:
            'Lorem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui. Risus atque amet dignissim, est elit.',
        quoteArticlePage_1:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced technology.',
        quoteArticlePage_2:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced.',
        imageArticlePage: '/images/main/blog-single-image5.jpg',
    },
    {
        id: 3,
        name1: 'Lifestyle Apps',
        name2: '& Widgets',
        author: 'Susanna Roberts',
        category: 'lifestyle',
        date: 6,
        image: '/images/main/lifesaving-apps.jpg',
        text: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit....',
        numberOfComments: 2,
        goToPageCategory: '/category/lifestyle',
        paragraphArticlePage_1:
            'orem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui.',
        paragraphArticlePage_2:
            'Lorem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui. Risus atque amet dignissim, est elit.',
        quoteArticlePage_1:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced technology.',
        quoteArticlePage_2:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced.',
        imageArticlePage: '/images/main/blog-single-image10.jpg',
    },
    {
        id: 4,
        name1: 'Spirit of',
        name2: 'Adventure Rises',
        author: 'Susanna Roberts',
        category: 'events',
        date: 6,
        image: '/images/main/spirit-of-adventure.jpg',
        text: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit....',
        numberOfComments: 2,
        goToPageCategory: '/category/events',
        paragraphArticlePage_1:
            'orem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui.',
        paragraphArticlePage_2:
            'Lorem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui. Risus atque amet dignissim, est elit.',
        quoteArticlePage_1:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced technology.',
        quoteArticlePage_2:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced.',
        imageArticlePage: '/images/main/blog-single-image14.jpg',
    },
    {
        id: 5,
        name1: 'Work Smart,',
        name2: 'Play Hard',
        author: 'Susanna Roberts',
        category: 'events',
        date: 6,
        image: '/images/main/work-from-home.jpg',
        text: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit....',
        numberOfComments: 2,
        goToPageCategory: '/category/events',
        paragraphArticlePage_1:
            'orem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui.',
        paragraphArticlePage_2:
            'Lorem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui. Risus atque amet dignissim, est elit.',
        quoteArticlePage_1:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced technology.',
        quoteArticlePage_2:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced.',
        imageArticlePage: '/images/main/blog-single-image8.jpg',
    },
    {
        id: 6,
        name1: 'Winter in Black',
        name2: '& White Mood',
        author: 'Susanna Roberts',
        category: 'lifestyle',
        date: 6,
        image: '/images/main/winter-warmth.jpg',
        text: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit....',
        numberOfComments: 2,
        goToPageCategory: '/category/lifestyle',
        paragraphArticlePage_1:
            'orem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui.',
        paragraphArticlePage_2:
            'Lorem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui. Risus atque amet dignissim, est elit.',
        quoteArticlePage_1:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced technology.',
        quoteArticlePage_2:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced.',
        imageArticlePage: '/images/main/blog-single-image6.jpg',
    },
    {
        id: 7,
        name1: 'The Secrets of',
        name2: 'Fashion',
        author: 'Susanna Roberts',
        category: 'events',
        date: 6,
        image: '/images/main/the-secrets-of-focus.jpg',
        text: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit....',
        numberOfComments: 2,
        goToPageCategory: '/category/events',
        paragraphArticlePage_1:
            'orem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui.',
        paragraphArticlePage_2:
            'Lorem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui. Risus atque amet dignissim, est elit.',
        quoteArticlePage_1:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced technology.',
        quoteArticlePage_2:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced.',
        imageArticlePage: '/images/main/blog-single-image9.jpg',
    },
    {
        id: 8,
        name1: 'The Pursuit of',
        name2: 'Ideas',
        author: 'Susanna Roberts',
        category: 'travel',
        date: 6,
        image: '/images/main/the-pursuit-of-ideas.jpg',
        text: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit....',
        numberOfComments: 2,
        goToPageCategory: '/category/travel',
        paragraphArticlePage_1:
            'orem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui.',
        paragraphArticlePage_2:
            'Lorem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui. Risus atque amet dignissim, est elit.',
        quoteArticlePage_1:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced technology.',
        quoteArticlePage_2:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced.',
        imageArticlePage: '/images/main/blog-single-image7.jpg',
    },
    {
        id: 9,
        name1: 'The Long Road',
        name2: 'to Rome',
        author: 'Susanna Roberts',
        category: 'culture',
        date: 6,
        image: '/images/main/the-long-wait.jpg',
        text: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit....',
        numberOfComments: 2,
        goToPageCategory: '/category/culture',
        paragraphArticlePage_1:
            'orem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui.',
        paragraphArticlePage_2:
            'Lorem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui. Risus atque amet dignissim, est elit.',
        quoteArticlePage_1:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced technology.',
        quoteArticlePage_2:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced.',
        imageArticlePage: '/images/main/blog-single-image2.jpg',
    },
    {
        id: 10,
        name1: 'Hunting for the',
        name2: 'Right Words',
        author: 'Susanna Roberts',
        category: 'culture',
        date: 6,
        image: '/images/main/hunting-for-words.jpg',
        text: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit....',
        numberOfComments: 2,
        goToPageCategory: '/category/culture',
        slide: 'yes',
        paragraphArticlePage_1:
            'orem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui.',
        paragraphArticlePage_2:
            'Lorem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui. Risus atque amet dignissim, est elit.',
        quoteArticlePage_1:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced technology.',
        quoteArticlePage_2:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced.',
        imageArticlePage: '/images/main/blog-single-image12.jpg',
    },
    {
        id: 11,
        name1: 'Honing the Craft',
        name2: 'to Perfection',
        author: 'Susanna Roberts',
        category: 'travel',
        date: 6,
        image: '/images/main/honing-the-craft.jpg',
        text: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit....',
        numberOfComments: 2,
        goToPageCategory: '/category/travel',
        slide: 'yes',
        paragraphArticlePage_1:
            'orem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui.',
        paragraphArticlePage_2:
            'Lorem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui. Risus atque amet dignissim, est elit.',
        quoteArticlePage_1:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced technology.',
        quoteArticlePage_2:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced.',
        imageArticlePage: '/images/main/blog-single-image13.jpg',
    },
    {
        id: 12,
        name1: 'Drifting Apart,',
        name2: 'Growing Happy',
        author: 'Susanna Roberts',
        category: 'living',
        date: 6,
        image: '/images/main/drifting-together.jpg',
        text: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit....',
        numberOfComments: 2,
        goToPageCategory: '/category/living',
        slide: 'yes',
        paragraphArticlePage_1:
            'orem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui.',
        paragraphArticlePage_2:
            'Lorem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus sceleris nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames eu eget dolorem sapien. Eget cras urna nam, ultricies proin interdum facilisis arcu, eget sed quam enim nam, sit pede nonummy viverra dolor sed orci, nec feugiat donec phasellus. Arcu litora gravida, eget ac, magna in aut proin congue, ac at justo wisi. Adipiscing nam et ac at ipsum. Ac id sit pharetra lorem ultrices, cum erat arcu non urna amet sodales, mauris odio, vestibulum nulla quisque ac metus, quam nostra a qui. Risus atque amet dignissim, est elit.',
        quoteArticlePage_1:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced technology.',
        quoteArticlePage_2:
            'This section contains many common flower varieties that can often be found at your local professional florist. With an expanding global market and advanced.',
        imageArticlePage: '/images/main/blog-single-image3.jpg',
    },
]

export default articlesArray

export const getArticleObject = (array: Article[]) => {
    return array.reduce(
        (object, article) => ({
            ...object,
            [article.id]: article,
        }),
        {}
    )
}
