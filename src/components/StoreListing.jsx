import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const StyledContainer = styled(Container)`
    margin-top: 600px;
    text-align: center;
`
const StyledRow = styled(Row)`
    border-bottom: 1px solid #e8e9eb;
    display: flex;
    justify-content: space-evenly;
`

const InnerRow = styled(Row)`
    flex-direction: row;
`

const CircleDiv = styled.div`
    width: 40px;
    height: 40px;
    background-color: red;
    border: 1px solid red;
    border-redius: 100%;

`

export default function StoreListing() {
    return <StyledContainer>
            <StyledRow>
                <InnerRow>
                    <Col>
                        <CircleDiv/>
                    </Col>
                    <Col>
                        <h5 style={ { fontWeight: 'bold' } }>Aldi</h5>
                        <p>Delivery and Pickup</p>
                    </Col>
                </InnerRow>
                <Col sm='1'></Col>
                <InnerRow>
                    <Col>
                        <CircleDiv/>
                    </Col>
                    <Col>
                        <h5 style={ { fontWeight: 'bold' } }>Sprouts Farmers Market</h5>
                        <p>Delivery and Pickup</p>
                    </Col>
                </InnerRow>
                <Col sm='1'></Col>
                <InnerRow>
                    <Col>
                        <CircleDiv/>
                    </Col>
                    <Col>
                        <h5 style={ { fontWeight: 'bold' } }>Kroger</h5>
                        <p>Delivery and Pickup</p>
                    </Col>
                </InnerRow>
            </StyledRow>
        </StyledContainer>
}