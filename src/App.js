import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import YouTubeSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
const apiKey = 'AIzaSyCejuQIPgh-89QuuCS9k-k2SZ8TlD9vm_w';

class App extends Component {
	state = {
		videos: [],
		selectedVideo: null
	}

	runSearch(term) {
		YouTubeSearch({ key: apiKey, term: term }, videos => {
			console.log(videos);
			this.setState({ videos: videos, selectedVideo: videos[0] })
		});
	}

	componentDidMount() {
		this.runSearch("kittens");
	}

	render() {
		const throttledSearch = _.debounce(this.runSearch.bind(this), 700);

		return (
			<Container>
				<Row>
					<Col md="12">
						<h1>YouTube Search Magic</h1>
						<SearchBar runSearch={throttledSearch} />
					</Col>
				</Row>
				<Row>
					<Col md="8">
						<VideoDetail selectedVideo={this.state.selectedVideo} />
					</Col>
					<Col md="4">
						<VideoList videos={this.state.videos} onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })} />
					</Col>
				</Row>
			</Container>
    	);
	}
}

export default App;
