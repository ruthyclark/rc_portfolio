import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

import resumePDF from '../assets/images/resume.pdf';

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numPages: null,
            pageNumber: 1,
        }
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ pageNumber: 1, numPages });
    }

    changePage = (offset) => {
        this.setState(prevState => ({
            ...this.state, 
            pageNumber: prevState.pageNumber + offset
          }));
    }

    previousPage = () => {
        this.changePage(-1);
    }

    nextPage = () => {
        this.changePage(1);
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div>
                <Hero title={this.props.title} />
                <Content>
                    <Document
                        file= {resumePDF}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                    <Page pageNumber={pageNumber} /> 
                    </Document>
                    <div>
                        <p>Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'} </p>
                        <button
                            type='button'
                            class="btn btn-dark"
                            disabled={pageNumber <= 1}
                            onClick={this.previousPage}
                        >
                            Previous 
                        </button>
                        <button
                            type='button'
                            class="btn btn-dark"
                            disabled={pageNumber >= numPages}
                            onClick={this.nextPage}
                        >
                            Next
                        </button>
                        <a href={resumePDF} download="RuthClark/'sAwesomeResume.pdf"> 
                            <button type='button' class="btn btn-dark">
                            Download
                            </button>
                        </a>
                    </div>
                </Content>
            </div>
        );
    }
}

export default Resume;