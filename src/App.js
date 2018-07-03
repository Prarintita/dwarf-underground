import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import HammerAd from './HammerAd'
import OtherAds from './OtherAds'
import ArticleLinks from './ArticleLinks'
import Title from './Title'
import ArticleBody from './ArticleBody'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main className="expanded row">
          <div className="large-8 medium-12 columns article">
          <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <Title />
            <ArticleBody />
            <ArticleLinks />
          </div>
          <aside className="large-4 medium-12 columns">
            <HammerAd />

          </aside>

          <OtherAds />

        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
