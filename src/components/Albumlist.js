import React, { Component } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
	state = {
		albums: [],
	};
	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(res => {
			this.setState({
				albums: res.data,
			});
		});
	}
	renderAlbum() {
		return this.state.albums.map(album => {
        const { title, artist, thumbnail_image, image, url } = album;
        const { containerStyle, imageContainer, textContainer, headerContainer, 
          imageStyle, buttonContainer, buttonTextStyle } = styles;
        return (
          <View key={album.title}>
            <View style={containerStyle}>
              <View>
                <Image 
                style={imageContainer}
                source={{ uri: thumbnail_image }} 
                />
              </View>

              <View style={textContainer}>
                <Text style={headerContainer}>{title}</Text>
                <Text>{artist}</Text>
              </View>
            </View>

            <View>
              <Image 
              style={imageStyle}
              source={{ uri: image }}
              />
            </View>
              
            <TouchableOpacity style={buttonContainer} onPress={() => Linking.openURL(url)} >
              <Text style={buttonTextStyle}>
                Buy Now
              </Text>
            </TouchableOpacity> 
          </View>
          
        );
      }
		);
	}
	render() {
		return (
			<ScrollView>
				{this.renderAlbum()}
			</ScrollView>
		);
	}
}

const styles = {
  containerStyle: {
    borderWidth: 3,
    borderRadius: 2,
    borderColor: 'black',
    backgroundColor: 'yellow',
    borderBottomWidth: 2,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  textContainer: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    padding: 5
  },
  headerContainer: {
    fontSize: 20
  },
  imageContainer: {
    height: 50,
    width: 50,
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    width: null,
    borderWidth: 3,
    borderRadius: 2,
    borderColor: 'black',
    backgroundColor: 'yellow',
    borderBottomWidth: 2,
    padding: 5,
    marginLeft: 10,
    marginRight: 10
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007aff',
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'stretch'
  }
};

export default AlbumList;
