import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// to={`/details/${item.id}`}

const images = [
  'https://belgorodproekt.ru/wp-content/uploads/2020/03/01-2.jpg',
  'https://m.terem-pro.ru/upload/iblock/63b/63bff1890a929fc510d8e87d30f7df1f.jpg',
  'https://belgorodproekt.ru/wp-content/uploads/2020/03/01-2.jpg',
];

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              src={image}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;
