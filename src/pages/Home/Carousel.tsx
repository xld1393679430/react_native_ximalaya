import React from 'react';
import SnapCarousel, {
  ParallaxImage,
  AdditionalParallaxProps,
  Pagination,
} from 'react-native-snap-carousel';
import {viewportWidth, wp, hp} from '@/utils/index';
import {StyleSheet, View} from 'react-native';

const data = [
  {
    id: '990000201908045234',
    image: 'http://39.105.213.120/images/7.jpg',
    colors: ['#8bf279', '#f279ae'],
  },
  {
    id: '360000199612094400',
    image: 'http://39.105.213.120/images/25.jpg',
    colors: ['#79d1f2', '#f2ef79'],
  },
  {
    id: '350000198812115687',
    image: 'http://39.105.213.120/images/31.jpg',
    colors: ['#cb79f2', '#79f2a8'],
  },
  {
    id: '430000197510096439',
    image: 'http://39.105.213.120/images/57.jpg',
    colors: ['#f28579', '#7990f2'],
  },
  {
    id: '360000198608314103',
    image: 'http://39.105.213.120/images/23.jpg',
    colors: ['#b3f279', '#f279d7'],
  },
  {
    id: '420000200008206658',
    image: 'http://39.105.213.120/images/21.jpg',
    colors: ['#79f2ea', '#f2c679'],
  },
];

const sliderWidth = viewportWidth;
const itemWidth = wp(90) + wp(2) * 2;

class Carousel extends React.Component {
  state = {
    activeIndex: 0,
  };

  get pagination() {
    const {activeIndex} = this.state;
    return (
      <View style={styles.paginationWrapper}>
        <Pagination
          containerStyle={styles.paginationContainer}
          dotsLength={data.length}
          dotContainerStyle={styles.dotContainer}
          activeDotIndex={activeIndex}
          dotStyle={styles.dot}
          inactiveDotScale={0.7}
          inactiveDotOpacity={0.4}
        />
      </View>
    );
  }
  handleSnapToItem = (index: number) => {
    this.setState({
      activeIndex: index,
    });
  };
  renderItem = (
    {item}: {item: any},
    parallaxProps?: AdditionalParallaxProps,
  ) => {
    return (
      <ParallaxImage
        source={{uri: item.image}}
        style={styles.image}
        containerStyle={styles.imageContainer}
        spinnerColor="rgba(0, 0, 0, 0.25)"
        {...parallaxProps}
      />
    );
  };

  render() {
    console.log(wp(90), hp(26), 444);
    return (
      <View>
        <SnapCarousel
          hasParallaxImages
          loop
          autoplay
          data={data}
          renderItem={this.renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          onSnapToItem={this.handleSnapToItem}
        />
        {this.pagination}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    width: itemWidth,
    height: hp(26),
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  paginationWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    top: -30,
    paddingHorizontal: 3,
    paddingVertical: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    borderRadius: 8,
  },
  dotContainer: {
    marginHorizontal: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
});

export default Carousel;
