import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';



function AboutPage (props) {
    return (
        <div>
            <Hero title={props.title} />

            <Content>
                Welcome to my page! 
                I recently completed a Full Stack coding bootcamp and am 
                looking for an opportunity to apply my new skills. I have over 
                15 years of customer service experience that I can bring to 
                the table and help develop products with the end user in mind. 
                Please allow me the opportunity to show you what I am capable of 
                and you will not be disappointed. 
            </Content>
        </div>
    )
}

export default AboutPage;