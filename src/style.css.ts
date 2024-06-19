import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: 'calc(100% - 2rem)',
  padding: '1rem',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const hint = style({
  borderRadius: '24px',
  padding: '1rem',
});

const btnContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'left',
  gap: '1rem',
});

const imgBox = style({
  border: '2px solid #F2F3F5',
  borderRadius: '24px',
  position: 'relative',
  overflow: 'hidden',
});
const img = style({
  position: 'relative',
  bottom: '-6px',
});
const ageBanner = style({
  position: 'absolute',
  zIndex: '1',
  top: '12px',
  left: '12px',
  borderRadius: '12px',
  backgroundColor: '#F3F4F5',
  padding: '4px 8px',
});

const cardBtn = style({
  backgroundColor: '#F3F4F5',
  borderRadius: '16px',
  padding: '1rem 0 1rem 1rem',
});
const iconWrap = style({
  width: '56px',
  height: '56px',
  borderRadius: '18px',
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
const slider = style({
  display: 'flex',
});
const slide = style({
  gap: '4px',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  width: '56px',
  alignItems: 'center',
});

const slide2 = style({
  marginTop: '20px',
  width: '280px',
  height: '408px',
});
const slide2Content = style({
  border: '2px solid #F2F3F5',
  borderRadius: '24px',
});
const slide2Text = style({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});
const iconWrapRed = style({
  width: '44px',
  height: '44px',
  borderRadius: '16px',
  backgroundColor: '#EE3D2F1A',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
});

const lineCell = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const appSt = {
  bottomBtn,
  container,
  hint,
  btnContainer,
  imgBox,
  img,
  ageBanner,
  cardBtn,
  iconWrap,
  slide,
  slider,
  slide2,
  slide2Content,
  slide2Text,
  iconWrapRed,
  lineCell,
};
