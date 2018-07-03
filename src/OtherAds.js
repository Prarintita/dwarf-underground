import React, { Component } from 'react'
import AdOne from './AdOne'

class OtherAds extends Component {
    constructor() {
        super()
    
        this.state = {
          linksArr: [
            {img: "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif", 
                alt: "orc", desc: "Single Orcs in Indianapolis"},
            {img: "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg", 
                alt: "mountain", desc: "You won't believe what's under this mountain"},
            {img: "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg",
                alt: "gold", desc: "Mine 20% more gold with One Weird Trick"},
            {img: "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg",
                alt: "Hobbit", desc: "Surprise for Indiana Hobbits born before 1999"}
          ]
        }
      }

    render() {
        return (
            <div className="small-12 columns other-articles">
                <h2>From around the Realm</h2>
                { this.state.linksArr.map(currLink => <AdOne src={currLink.img} alt={currLink.alt}
                    desc={currLink.desc} />) }
            </div>
        )
    }
}

export default OtherAds