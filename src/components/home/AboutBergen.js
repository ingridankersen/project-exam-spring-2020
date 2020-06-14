import React from 'react';
import Image from './../base/Image';
import BergenImage from './../../images/bergen-4.jpg';
import H2 from './../base/H2';
import Paragraph from '../base/Paragraph';

function AboutBergen() {
    return(
        <div className="two-columns">
            <div className="about-bergen__image">
            <Image src={BergenImage} alt="Bergen Harbour" />
            </div>
            <article className="about-bergen__text">
            <H2>About Bergen</H2>
            <Paragraph><b>Bergen is the Gateway to the Fjords of Norway. As a UNESCO World Heritage City and a European City of Culture, the Bergen region has the ideal combination of nature, culture and exciting urban life all year around.</b></Paragraph>
            <Paragraph>In Bergen you can find a range of different accommodation ranging from exclusive hotels to charming Bed & Breakfasts. In Bergen you can also enjoy some of the finest seafood <a href="https://en.visitbergen.com/food-and-drink/restaurants" target="_blank" rel="noopener noreferrer">restaurants</a> in Norway. If you are looking for <a href="https://en.visitbergen.com/things-to-do" target="_blank" rel="noopener noreferrer">things to do</a> in, check out the large selection of <a href="https://en.visitbergen.com/things-to-do/activities" target="_blank" rel="noopener noreferrer">activities</a> and <a href="https://en.visitbergen.com/things-to-do/activities" target="_blank" rel="noopener noreferrer">attractions</a>.</Paragraph>
            <Paragraph><b>The Gateway to the Fjords of Norway:</b></Paragraph>
            <Paragraph>With its ideal location right in the heart of the Fjord Norway region, between the Hardangerfjord and the Sognefjord, it is the perfect starting point for day trips to one of the world’s biggest scenic attractions – the fjords. From Bergen you are real close to the spectacular fjord experiences, either you want to go on a fjord tour or dive into the experience with mountain and glacier hiking in the majestic mountain landscape, skiing in some of Norway’s best terrains, biking along the beautiful fjord arms or explore the wet element with white water rafting or fishing in the ocean along the beautiful coast line.</Paragraph>
            <Paragraph>- From <a href="https://en.visitbergen.com/">Visit Bergen</a></Paragraph>
            </article>
        </div>
    )
}

export default AboutBergen;