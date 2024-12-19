export type IconsId =
  | 'secure'
  | 'search'
  | 'plus'
  | 'heart-solid'
  | 'heart-regular'
  | 'close'
  | 'burger'
  | 'bag'
  | 'arrow';

export const ICONS_CODEPOINTS: { [key in IconsId]: string } = {
  'secure': '61697',
  'search': '61698',
  'plus': '61699',
  'heart-solid': '61700',
  'heart-regular': '61701',
  'close': '61702',
  'burger': '61703',
  'bag': '61704',
  'arrow': '61705',
};
