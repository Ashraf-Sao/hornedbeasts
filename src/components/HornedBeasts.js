import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfHornedBeasts: 0
        }
    }
    increasNumOfHornedBeasts = () => {
        this.setState({
            numOfHornedBeasts: this.state.numOfHornedBeasts + 1
        })
    }
    render() {
        return (
            <div>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={this.props.url} onClick={this.increasNumOfHornedBeasts} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            ❤️ = {this.state.numOfHornedBeasts}
                        </Card.Text>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default HornedBeasts;