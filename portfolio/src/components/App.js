import React, {Component} from 'react';
import '../App.css';
import Projects from './Projects';
import SocialProfiles from '../components/SocialProfiles';


class App extends Component {
    state = {displayBio: false};

    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }

    render() {
        return (
            <div>
                <h1>Portfolio</h1>
                <p>My Name is Rick.</p>
                <p>I'm semi-retired and enjoy coding and gaming</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in New Jersey</p>
                            <p>I like coding in most programming languages</p>
                            <p>I also like to play video games, and go fishing!</p>
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                        <button onClick={this.toggleDisplayBio}>Read More</button>
                    )
                }
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles/>
            </div>
        );
    }
}

export default App;