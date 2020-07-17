import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Card from './Card';
import ruthgithub from '../assets/images/ruthgithub.jpg';
import video from '../assets/images/videoplaceholder.jpg';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Bootcamp Portfolio Project',
                    subTitle: 'First Attempt at Website',
                    imgSrc: video,
                    //link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Ruth Clark',
                    subTitle: 'Github',
                    imgSrc: ruthgithub,
                    link: 'https://github.com/ruthyclark',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Bootcamp Backend Project',
                    subTitle: 'First Attempt at API requests',
                    imgSrc: video,
                    //link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel; 