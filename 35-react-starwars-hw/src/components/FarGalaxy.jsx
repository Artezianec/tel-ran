import React from 'react'
import { opening_crowl, url } from '../utils/constants'
import style from '../css_modules/farGalaxy.module.css'

class FarGalaxy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            opening_crowl: opening_crowl
        };
    }
    componentDidMount() {
        
            const number = Math.floor(1 + Math.random() * 6);
            fetch(`${url}/v1/films/${number}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        isLoading: false,
                        opening_crawl: data.opening_crawl
                    });
                });
        }

    render() {
        if (this.state.isLoading) {
            return (
                <div className="App spinner-border text-primary">
                </div>
            );
        } else {
            return (
                <div className="App">
                    <p className={style.farGalaxy}>{this.state.opening_crawl}</p>
                </div>
            );
        }
    }
}

export default FarGalaxy