import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Card from './Card';
import ruthgithub from '../assets/images/ruthgithub2.jpg';
import video from '../assets/images/videoplaceholder.png';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Nucamp Bootstrap Project',
                    subTitle: 'Video Coming Soon',
                    imgSrc: video,
                    link: 'https://github.com/ruthyclark/nucamp-bootstrap',
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
                    title: 'Nucamp React Project',
                    subTitle: 'Video Coming Soon',
                    imgSrc: video,
                    link: 'https://github.com/ruthyclark/nucamp-react',
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