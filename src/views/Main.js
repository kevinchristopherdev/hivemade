import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar, Text, Image,
  TouchableOpacity
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../Const';
import {
  Actions
} from 'react-native-router-flux';
import {
  Constants, Components
} from 'expo';

// components
import UppercasedText from '../components/common/UppercasedText';
import Carousel, {
  Pagination
} from 'react-native-snap-carousel';
import {
  Icon
} from 'react-native-elements';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: 0
    };
  }

  _renderCard({item, i}) {
    return (
      <TouchableOpacity
        onPress={Actions.product}>
        <View style={styles.productCard}>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.carouselContainer}>
          <View style={styles.header}>

          </View>
          <Carousel
            data={[{}, {}, {}, {}, {}]}
            renderItem={this._renderCard}
            sliderWidth={Sizes.Width}
            itemWidth={Sizes.Width * 0.8}
            onSnapToItem={i => this.setState({
              activeCard: i})} />
          <Pagination
            dotsLength={5}
            activeDotIndex={this.state.activeCard}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.paginationDot}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6} />
        </View>
        <View style={styles.statusContainer}>
          <View style={[Styles.Card, Styles.EqualColumns, styles.statusContent]}>
            <View style={styles.statusTextContainer}>
              <UppercasedText style={[
                Styles.Text, Styles.Emphasized, Styles.Title, Styles.BottomHalfSpacing]}>
                下午好, Kenneth.
              </UppercasedText>
              <Text style={[Styles.Text]}>
                感覺很幸運？今天有兩款免費產品可供選擇。
              </Text>
            </View>
            <View style={styles.displayPhotoContainer}>
              <Image
                source={{uri: 'https://scontent.fhkg4-2.fna.fbcdn.net/v/t1.0-9/12032203_10155971613590063_6845474097114590785_n.jpg?oh=ca705fbfd78bc30b1e18575750a677dc&oe=5A2AF7A9'}}
                style={styles.displayPhoto} />
            </View>
          </View>
          <View style={[Styles.Card, Styles.EqualColumns, styles.buttons]}>
            <Icon name='new-releases' />
            <Icon name='style' />
            <Icon name='local-shipping' />
            <Icon name='tag-faces' />
          </View>
          <View style={styles.statusBar}>
            <Text style={[Styles.Text, Styles.SmallText, Styles.Center]}>
              預計在3天內交付兩個包裹。
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Accent
  },

  header: {
    padding: Sizes.OuterFrame
  },

  carouselContainer: {
    flex: 1,
    backgroundColor: Colors.Accent
  },

  statusContent: {
    alignItems: 'center'
  },

  statusTextContainer: {
    flex: 1
  },

  displayPhotoContainer: {
    alignItems: 'flex-start'
  },

  displayPhoto: {
    width: 60,
    height: 60,
    backgroundColor: Colors.MenuBackground
  },

  statusBar: {
    padding: Sizes.InnerFrame / 2,
    backgroundColor: Colors.Background
  },

  buttons: {
    alignItems: 'center',
    paddingBottom: Sizes.InnerFrame,
    paddingTop: 0
  },

  productCard: {
    width: Sizes.Width * 0.8,
    height: Sizes.Height * 0.6,
    backgroundColor: Colors.Foreground
  },

  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.92)'
  }
});
