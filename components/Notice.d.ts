import { NamedComponent } from '.';

type Notice = {
  Notice: NamedComponent<'Notice'>;
  NoticeButton: NamedComponent<'NoticeButton'>;
  NoticeButtonAnchor: NamedComponent<'NoticeButtonAnchor'>;
  NoticeCloseButton: NamedComponent<'NoticeCloseButton'>;
  PrimaryCTANoticeButton: NamedComponent<'PrimaryCTANoticeButton'>;
  NoticeColors: {
    BRAND: string;
    CUSTOM: string;
    DANGER: string;
    DARK: string;
    DEFAULT: string;
    INFO: string;
    NEUTRAL: string;
    PLAYSTATION: string;
    PREMIUM_TIER_1: string;
    PREMIUM_TIER_2: string;
    SPOTIFY: string;
    STREAMER_MODE: string;
    WARNING: string;
  };
};

export default Notice; 
