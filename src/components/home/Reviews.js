import React from 'react';
import Review from './../base/Review';
import H2 from './../base/H2';

var reviews = [ 
    {
        name: 'John Doe',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Aliquam etiam erat velit scelerisque. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Velit egestas dui id ornare arcu odio ut sem. Porttitor eget dolor morbi non arcu risus quis varius quam.',
        accommodation: 'The Hideaway',
        imageAlt: 'Image of John Doe',
        urlPath: 'accommodation/5eba97c8abfc05ba286662f2'
    },
    {
        name: 'Joe Exotic',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Aliquam etiam erat velit scelerisque. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Velit egestas dui id ornare arcu odio ut sem. Porttitor eget dolor morbi non arcu risus quis varius quam.',
        accommodation: 'Tree Tops',
        imageAlt: 'Image of Joe Exotic',
        urlPath: 'accommodation/5eba97c8abfc05ba286662f4'
    },
    {
        name: 'Jake Peralta',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Aliquam etiam erat velit scelerisque. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Velit egestas dui id ornare arcu odio ut sem. Porttitor eget dolor morbi non arcu risus quis varius quam.',
        accommodation: 'Rest Easy',
        imageAlt: 'Image of Jake Peralta',
        urlPath: 'accommodation/5eba97c8abfc05ba286662f1'
    },
    {
        name: 'Charles Boyle',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Aliquam etiam erat velit scelerisque. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Velit egestas dui id ornare arcu odio ut sem. Porttitor eget dolor morbi non arcu risus quis varius quam.',
        accommodation: 'Fjell Hotel',
        imageAlt: 'Image of Charles Boyle',
        urlPath: 'accommodation/5eba97c8abfc05ba286662f1'
    }
]

class Reviews extends React.Component {
    render() {
        return(
            <>
            <div className="reviews">
                <H2>Customer Reviews</H2>
                <div className="two-columns">
                {reviews.map(
                    (review, i) => 
                        <Review 
                        key={i} 
                        name={review.name} 
                        message={review.message} 
                        accommodation={review.accommodation} 
                        imageAlt={review.imageAlt} 
                        urlPath={review.urlPath}
                        />
                )}
                </div>
            </div>
            </>
        )
    }
}

export default Reviews;