import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Typography } from '@alfalab/core-components/typography';
import { animated, useInView, useSpring } from '@react-spring/web';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import p1 from './assets/p1.png';
import s1 from './assets/s1.png';
import s2 from './assets/s2.png';
import s3 from './assets/s3.png';
import s4 from './assets/s4.png';
import { appSt } from './style.css';

const slides = [
  {
    icon: 'glyph_video-camera_m',
    name: 'Эфиры',
  },
  {
    icon: 'rocky_cup-sport_m',
    name: 'Турниры',
  },
  {
    icon: 'site_pedestal-first_m',
    name: 'Сражения',
  },
  {
    icon: 'glyph_navigation-chat_m',
    name: 'Кланы',
  },
  {
    icon: 'glyph_square-academic-cap_m',
    name: 'Академия',
  },
  {
    icon: 'glyph_chart-column-three-square-medium_m',
    name: 'Терминал',
  },
  {
    icon: 'glyph_checkmark-hexagon_m',
    name: 'Блоги',
  },
  {
    icon: 'glyph_documents-lines_m',
    name: 'Статьи',
  },
];

const slides2 = [
  {
    img: s1,
    title: 'Учись',
    text: 'Встроенная система прогрессии позволит в игровой форме понять, как работают инвестиции',
  },
  {
    img: s2,
    title: 'Дружи',
    text: 'Находи друзей по всему миру! Находи лучших, становись лучшим, развивай себя и помогай другим',
  },
  {
    img: s3,
    title: 'Веселись',
    text: 'Играй и соревнуйся со своими друзьями и близкими без ограничений',
  },
  {
    img: s4,
    title: 'Торгуй',
    text: 'Функционал инвестиционной платформы прост в освоении и готов к твоему успеху',
  },
];

const cells = [
  {
    icon: 'glyph_square-academic-cap_m',
    title: 'Задавай вопросы',
    subtitle: 'Делись мнением и спрашивай мнения друзей',
  },
  {
    icon: 'glyph_thumb-up_m',
    title: 'Создавай посты',
    subtitle: 'Публикуй свои мысли в разных форматах: голосовые, кружки, рилзы',
  },
  {
    icon: 'glyph_star_m',
    title: 'Ищи лучших',
    subtitle: 'Закомься с лидерами мнений и опытными трейдерами',
  },
  {
    icon: 'glyph_navigation-chat_m',
    title: 'Общайся',
    subtitle: 'Создавай общие чаты с друзьями из соц.сети',
  },
];

const submit = () => {
  (window.location as unknown as string) =
    'alfabank://webFeature?type=recommendation&url=https%3A%2F%2Falfabank.ru%2Fmake-money%2Finvestments%2Fpromo%2Fdeti%2F';
};

export const App = () => {
  const [inViewRef, inView] = useInView();

  const springs = useSpring({
    from: { bottom: -200 },
    to: { bottom: inView ? -200 : 0 },
  });

  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive font="system" tag="h1" view="medium" weight="bold">
          Социальная сеть для инвесторов
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-small" color="secondary" defaultMargins={false}>
          Общайся и зарабатывай вместе с другими
        </Typography.Text>

        <div className={appSt.imgBox}>
          <img src={p1} width="100%" height="100%" className={appSt.img} />
          <div className={appSt.ageBanner}>
            <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
              14+
            </Typography.Text>
          </div>
        </div>

        <div className={appSt.cardBtn}>
          <div className={appSt.btnContainer} style={{ marginBottom: '1.5rem' }} onClick={submit}>
            <div>
              <Typography.TitleResponsive font="system" tag="h2" view="small" weight="bold">
                Присоединиться к сообществу
              </Typography.TitleResponsive>
              <Typography.Text color="secondary" tag="p" view="primary-small" defaultMargins={false}>
                Потребуется открыть брокерский счёт
              </Typography.Text>
            </div>
            <div style={{ marginRight: '1rem' }}>
              <CDNIcon name="glyph_chevron-right_m" />
            </div>
          </div>
          <div ref={inViewRef} />
          <Swiper spaceBetween={16} slidesPerView="auto" className={appSt.slider}>
            {slides.map(slide => (
              <SwiperSlide className={appSt.slide} key={slide.icon}>
                <div className={appSt.iconWrap}>
                  <CDNIcon name={slide.icon} />
                </div>
                <Typography.Text tag="p" view="primary-small" defaultMargins={false}>
                  {slide.name}
                </Typography.Text>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div>
          <Swiper spaceBetween={16} slidesPerView="auto">
            {slides2.map(slide => (
              <SwiperSlide className={appSt.slide2} key={slide.title}>
                <div className={appSt.slide2Content}>
                  <img src={slide.img} width="100%" height="100%" alt={slide.title} style={{ marginTop: '-20px' }} />
                  <div className={appSt.slide2Text}>
                    <Typography.TitleResponsive font="system" tag="h3" view="small" weight="bold">
                      {slide.title}
                    </Typography.TitleResponsive>
                    <Typography.Text color="secondary" tag="p" view="primary-small" defaultMargins={false}>
                      {slide.text}
                    </Typography.Text>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {cells.map(cell => (
          <div className={appSt.lineCell} key={cell.icon}>
            <div className={appSt.iconWrapRed}>
              <CDNIcon name={cell.icon} color="#EE3D2F" />
            </div>
            <div>
              <Typography.Text
                style={{ lineHeight: '24px' }}
                tag="p"
                view="primary-medium"
                weight="medium"
                defaultMargins={false}
              >
                {cell.title}
              </Typography.Text>
              <Typography.Text
                style={{ lineHeight: '24px' }}
                tag="p"
                view="primary-small"
                color="secondary"
                defaultMargins={false}
              >
                {cell.subtitle}
              </Typography.Text>
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: '162px' }} />
      <animated.div className={appSt.bottomBtn} style={springs}>
        <ButtonMobile block view="primary" onClick={submit} className={appSt.hint}>
          <div className={appSt.btnContainer}>
            <div>
              <Typography.TitleResponsive font="system" tag="h2" view="small" weight="bold">
                Присоединиться к сообществу
              </Typography.TitleResponsive>
              <Typography.Text color="secondary-inverted" tag="p" view="primary-small" defaultMargins={false}>
                Потребуется открыть брокерский счёт
              </Typography.Text>
            </div>
            <CDNIcon name="glyph_chevron-right_m" />
          </div>
        </ButtonMobile>
      </animated.div>
    </>
  );
};
