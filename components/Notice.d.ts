import { Component } from '.';

type Notice = {
  Notice: Component<'Notice'>;
  NoticeButton: Component<'NoticeButton'>;
  NoticeButtonAnchor: Component<'NoticeButtonAnchor'>;
  NoticeCloseButton: Component<'NoticeCloseButton'>;
  PrimaryCTANoticeButton: Component<'PrimaryCTANoticeButton'>;
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
