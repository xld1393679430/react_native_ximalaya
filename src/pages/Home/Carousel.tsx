import React from 'react';
import SnapCarousel, {
  ParallaxImage,
  AdditionalParallaxProps,
  Pagination,
} from 'react-native-snap-carousel';
import {viewportWidth, wp, hp} from '@/utils/index';
import {StyleSheet, View} from 'react-native';

const sliderWidth = viewportWidth;
const itemWidth = wp(90) + wp(2) * 2;

interface IProps {
  data: ICarousel[];
}
class Carousel extends React.Component<IProps> {
  state = {
    activeIndex: 0,
  };

  get pagination() {
    const {activeIndex} = this.state;
    const {data} = this.props;
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
    {item}: {item: ICarousel},
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
    const {data} = this.props;
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
