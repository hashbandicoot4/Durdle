import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import OutputBox from './OutputBox';

const OutputRow = ({ guess, score }) => {
    const scoreToCol = score => {
        switch (score) {
            case 0:
                return '#220050';
            case 1:
                return '#f0c002';
            case 2:
                return '#009e18';
            default:
                return '#d470ff';
        }
    };

    return (
        <Container>
            <Row style={{ alignContent: '', marginBottom: '0.1rem' }}>
                {score.map((s, i) => (
                    <Col key={`c${i}`} style={{ width: '2.2rem' }}>
                        <OutputBox
                            char={guess[i]}
                            col={scoreToCol(s)}
                        ></OutputBox>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default OutputRow;
