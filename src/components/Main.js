import React from 'react';
import data from './data.json';
import HornedBeasts from './HornedBeasts';
import Cards from 'react-bootstrap/Card'

class Main extends React.Component {
    render() {
        return (
            <div>
                <Cards>
                    {data.map((items) => {
                        return (
                            <HornedBeasts title={items.title} url={items.image_url} description={items.description}/>)
                    })}
                </Cards>
            </div>
        )
    }
}

export default Main;
