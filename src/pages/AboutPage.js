import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';



function AboutPage (props) {
    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hi Yinz! I am Ruth Clark. </p>

                <p>I grew up in Southern California but had the great opportunity to travel to Pittsburgh many moons ago. 
                    One hot sticky day in July of 2013, I made the trek up to Mt. Washington and was so captivated by the view 
                    that I decided to make this city my home. I love the cities 94 unique neighborhoods that lay across foliage 
                    filled hills and three magnificent rivers.
                </p>

                <p>My mission in life is to get my family, who still lives in California, to fall in love with Pittsburgh and 
                move here also. A recent win is that my sister will be moving to the ‘burgh in the fall! Now if I could only 
                convince my parents to also move here… Alas, they love Vitamin D too much and my dad’s kryptonite is snow. I 
                was really hoping that their grandson would be enough of an incentive to bring them here, but I guess they just 
                don’t love him enough (JK, they are obsessed with him and demand videos on a daily basis).
                </p>

                <p>My son, is actually the reason that I embarked on my journey to learn how to code. I want to be better for 
                    him and give him the world he deserves. So, I started at Nucamp Coding Bootcamp in January, before the pandemic 
                    and the end of the world as we know it lol. Maybe not the best time to attempt such a thing but I pushed through 
                    and graduated with honors. 
                </p>

                <p>I am now looking for an entry-level position where I can continue to learn and advance my skills. Currently, I am 
                    a Senior Support Specialist at a small startup company in Pittsburgh. I have been at this company for 3 years now 
                    and have had the opportunity of working closely with our development team. Please feel free to peruse my GitHub and 
                    LinkedIn and email me if you want to learn more.  
                </p>

                <p>Hope to hear from you soon! </p>

                <p>PS. I am not really “ruthless” as my site might suggest. Quite the opposite in fact as the name Ruth means “friend” 
                    and I do my best to live up to that.
                </p>

            </Content>
        </div>
    )
}

export default AboutPage;