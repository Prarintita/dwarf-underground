import React, { Component } from 'react'

class AdOne extends Component {
    render() {
        return (
            <div className="small-6 medium-3 columns other-article">
            <a href="#">
                <img src={this.props.src} alt={this.props.alt} />
                        <p>{this.props.desc}</p>
            </a>
            </div>
        )
    }
}

export default AdOne