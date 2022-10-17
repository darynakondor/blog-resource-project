// import slidesArray from './slidesArray'
import articlesArray from 'components/Articles/articlesArray'
import SlidesListItem from './SlidesListItem'
import Slider from 'react-slick'
type SlidePrors = {
    id: number
    name1: string
    name2: string
    date: number
    image: string
    text: string
    slide?: string
}
type Props = {
    showArticlePage: (id: number) => void
}

const SlideList = ({ showArticlePage }: Props) => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3800,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <section className="section-slider grid">
            <div className="slider-wrapper">
                <Slider {...settings}>
                    {articlesArray
                        .filter(({ slide }: SlidePrors) => slide === 'yes')
                        .map(
                            ({
                                id,
                                name1,
                                name2,
                                date,
                                image,
                                text,
                            }: SlidePrors) => (
                                <div key={id}>
                                    <SlidesListItem
                                        id={id}
                                        name1={name1}
                                        name2={name2}
                                        date={date}
                                        image={image}
                                        text={text}
                                        showArticlePage={showArticlePage}
                                    />
                                </div>
                            )
                        )}
                </Slider>
            </div>
        </section>
    )
}

export default SlideList
