import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Container, Navbar, NavbarBrand, Nav } from 'react-bootstrap';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
//import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';

class App extends React.Component {
  	constructor(props) {
		super(props);
		this.state = {
		title: 'Ruth Clark',
		headerLinks: [
			{title: 'Home', path: '/'},
			{title: 'About', path: '/about'},
			{title: 'Contact', path: '/contact'},
			{title: 'Resume', path: '/resume'}
		],
		home: {
			title: "Meet Ruth.",
			titleTwo: 'Hire Ruth.',
			subTitle: "Don't be Ruth-less.",
			text: "Checkout my projects below"  
		},
		about: {
			title: 'About Me'
		},
		/*
		contact: {
			title: "Let's Talk"
		},
		*/
		resume: {
			title: "My Resume"
		}
	}
  }
  render() {
    	return (
			<Router>
				<Container className='p-0' fluid={true} >
					<Navbar className='border-bottom' bg='transparent' expand='lg'>
						<NavbarBrand>Ruth Clark</NavbarBrand>
						<Navbar.Toggle className='border-0' aria-controls='navbar-toggle'/>
						<Navbar.Collapse id='navbar-toggle'>
							<Nav className='ml-auto'>
								<Link className='nav-link' to="/">Home</Link>
								<Link className='nav-link' to="/About">About</Link>
								<Link className='nav-link' to="/Resume">Resume</Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
					<Route path='/'exact render={() => <HomePage title={this.state.home.title} titleTwo={this.state.home.titleTwo} subTitle={this.state.home.subTitle} text={this.state.home.text}/> } />
					<Route path='/about'render={() => <AboutPage title={this.state.about.title} /> } />
					<Route path='/resume'render={() => <ResumePage title={this.state.resume.title} /> } />
					<Footer />
				</Container>
			</Router>
    );
  }
}

export default App;
