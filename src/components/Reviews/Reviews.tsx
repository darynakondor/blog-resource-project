import React, { useState } from 'react'
import './Reviews.scss'

type Review = {
    name: string
    text: string
}

const Reviews = () => {
    const arrReviews: Review[] = [
        {
            name: 'John Mayer',
            text: 'Lorem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus scelerisque velit, nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames.',
        },
        {
            name: 'Amelia Williams',
            text: 'Lorem ipsum dolor sit amet, lacus eu erat integer bibendum rutrum, sed arcu molestie, in quis ornare, rhoncus scelerisque velit, nam feugiat nibh leo. Ac suspendisse turpis posuere, cursus fames.',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            text: e.target.value,
        }))
    }
    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required')
        } else {
            setReviews((prevState: Review[]) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        }
    }

    return (
        <>
            <h2 className="title-comments"> Comments</h2>
            {reviews.map((review: Review, i: number) => (
                <div className="card-comments-posted" key={i}>
                    <div className="card-comments">
                        <div className="comments-name">{review.name}</div>
                        <div className="comments-text">"{review.text}"</div>
                    </div>
                </div>
            ))}

            <div className="card-leave-comments">
                <div className="card-content">
                    <h3 className="title-comments">Leave a reply</h3>
                    <form onSubmit={onSend}>
                        <div>
                            <input
                                name="name"
                                placeholder="Your full name"
                                type="text"
                                value={newReview.name}
                                onChange={handleChangeName}
                            />
                        </div>
                        <br />
                        <textarea
                            placeholder="Write your comment here..."
                            name="comment"
                            value={newReview.text}
                            onChange={handleChangeText}
                        />
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Reviews
