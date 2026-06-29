const BASE = "https://www.apple.com/v/airpods-4/g/images/overview";

const P = {
  welcome: `${BASE}/welcome`,
  media: `${BASE}/media-card`,
  bento: `${BASE}/bento-gallery`,
  stories: `${BASE}/stories`,
  contrast: `${BASE}/contrast`,
  icon: `${BASE}/icon-card`,
} as const;

export const hero = {
  primary: { src: `${P.welcome}/hero__1z1ep1te3eq2_xlarge.jpg`, alt: "AirPods 4" },
  startframe: {
    src: `${P.welcome}/hero-airpods_startframe__qxv9xy7swkqm_xlarge.jpg`,
    alt: "AirPods 4 cinematic start frame",
  },
} as const;

export const highlights = {
  lifestyle: { src: `${P.media}/media_lifestyle__cyk4qt05xic2_large.jpg`, alt: "AirPods 4 lifestyle" },
  liveTranslation: {
    src: `${P.media}/media_live_translation__epwy7gl2k7ee_large.jpg`,
    alt: "Live Translation on AirPods",
  },
  chipEnd: { src: `${P.media}/chip_endframe__eknnhv3wqlyu_large.jpg`, alt: "H2 chip end frame" },
  chipStart: { src: `${P.media}/chip_startframe__dplqqnj2n1si_large.jpg`, alt: "H2 chip start frame" },
  charging: { src: `${P.media}/media_charging__csr8q6rfe4sy_large.jpg`, alt: "AirPods charging" },
} as const;

export const bento = {
  caseOpen: { src: `${P.bento}/bento_case_open__63kcmcc775u6_large.jpg`, alt: "AirPods case open" },
  stem: { src: `${P.bento}/bento_stem__cfztc9z01vpy_large.jpg`, alt: "AirPods stem" },
  closeup: { src: `${P.bento}/bento_closeup__nvqogkmqz4ae_large.jpg`, alt: "AirPods closeup" },
  caseClose: { src: `${P.bento}/bento_case_close__f0fhueeeoy2q_large.jpg`, alt: "AirPods case closed" },
  side: { src: `${P.bento}/bento_side__edtf67wfg10m_large.jpg`, alt: "AirPods side view" },
  angle: { src: `${P.bento}/bento_angle__b2i7xnzp5h7m_large.jpg`, alt: "AirPods angle view" },
} as const;

export const audio = {
  hero: { src: `${P.stories}/audio_hero__e2s9qjrif1iu_xlarge.png`, alt: "Person wearing AirPods 4" },
  h2: { src: `${P.stories}/audio_h2__7lchtwyfpnmi_large.jpg`, alt: "H2 chip audio" },
  voice: { src: `${P.stories}/audio_voice__fsh5v6wchyqa_large.jpg`, alt: "Voice Isolation" },
  acoustic: { src: `${P.stories}/audio_airpod__fxaq33c1a7iy_large.jpg`, alt: "Acoustic architecture" },
  eq: { src: `${P.stories}/audio_eq__bc2dvj3x6k9e_large.jpg`, alt: "Adaptive EQ" },
  spatial: { src: `${P.stories}/audio_spatial__e3dr2nvlb3ki_large.jpg`, alt: "Personalised Spatial Audio" },
} as const;

export const noise = {
  hero: { src: `${P.stories}/noise_hero__rhegsu0w6iiy_xlarge.jpg`, alt: "Active Noise Cancellation" },
  adaptive: { src: `${P.contrast}/noise_icon_adaptive__eh8sgult7gae_large.png`, alt: "Adaptive Audio" },
  transparency: {
    src: `${P.contrast}/noise_icon_transparency__buvnzqmv27ci_large.png`,
    alt: "Transparency mode",
  },
  conversation: {
    src: `${P.contrast}/noise_icon_conversation__ez1oxr48lac2_large.png`,
    alt: "Conversation Awareness",
  },
} as const;

export const wearability = {
  hero: { src: `${P.stories}/design_airpods_outside__de500neaukgi_large.jpg`, alt: "AirPods outside design" },
  inside: { src: `${P.stories}/design_airpods_inside__exv05zud5866_large.jpg`, alt: "AirPods inside design" },
  stem: { src: `${P.stories}/design_airpods_stem__ca26r79ta9f6_large.jpg`, alt: "AirPods stem design" },
  pair: { src: `${P.stories}/design_airpods_pair__c4zc76vxva82_large.jpg`, alt: "AirPods pair" },
} as const;

export const battery = {
  case: { src: `${P.stories}/battery_case__ey8pezx7mb6u_large.png`, alt: "AirPods charging case battery" },
  usb: { src: `${P.stories}/battery_usb__fmcq7sazbxm6_large.jpg`, alt: "USB-C charging" },
  wireless: { src: `${P.stories}/battery_charger__f8vsiut6h1aq_large.jpg`, alt: "Wireless charging" },
} as const;

export const magic = {
  connect: {
    src: `${P.stories}/airpods-connect_endframe__eyakc5xs2ei6_large.png`,
    alt: "AirPods seamless connect",
  },
  detection: { src: `${P.stories}/magic_detection__eye833zljbqu_large.jpg`, alt: "On-device detection" },
  findMy: { src: `${P.stories}/magic_find_my__bh83ouli1x4y_large.jpg`, alt: "Find My support" },
  listen: { src: `${P.stories}/magic_listen__bfukhz82rzea_large.jpg`, alt: "Listen across devices" },
} as const;

export const iconCard = {
  emoji: { src: `${P.icon}/icon_emoji_face_grinning__cua3l9d18as2_large.png`, alt: "Emoji face grinning" },
  appleCard: { src: `${P.icon}/icon_applecard__fjhjbuy2hwae_large.png`, alt: "Apple Card" },
  truck: { src: `${P.icon}/icon_truck_box__blkgu1iu59ea_large.png`, alt: "Delivery truck" },
  message: { src: `${P.icon}/icon_message_and_message__b00c2to00mz6_large.png`, alt: "Message bubble" },
  appStore: { src: `${P.icon}/icon_app_applestore__dm9p2yl2q9w2_large.png`, alt: "Apple Store app" },
} as const;

export const contrast = {
  airpods4Closed: {
    src: `${P.contrast}/explore_airpods_4_closed__dgo55jp7r7gy_xlarge.jpg`,
    alt: "AirPods 4 charging case closed",
  },
  airpods4Opened: {
    src: `${P.contrast}/explore_airpods_4_opened__d1lvsgfc59me_xlarge.jpg`,
    alt: "AirPods 4 with ANC out of case",
  },
  spatialAudio: {
    src: `${P.contrast}/person_spatialaudio__cabm1tfxfz9e_large.png`,
    alt: "Personalised Spatial Audio",
  },
  h2Chip: { src: `${P.contrast}/chip_h2__eu62bmbnh0wi_large.png`, alt: "H2 chip" },
  batteryFull: { src: `${P.contrast}/battery_100percent__6n3pyba2z4im_large.png`, alt: "Battery" },
  chargingCase: { src: `${P.contrast}/airpods_4_chargingcase__c4fwrkdadb42_large.png`, alt: "Charging case" },
  waterDrop: { src: `${P.contrast}/drop__d6cji0kw3xg2_large.png`, alt: "Water resistant" },
  noiseGroup: { src: `${P.contrast}/contrast_icon_group__f8aob849c2i6_large.png`, alt: "Noise control" },
} as const;

export type ImageAsset = { src: string; alt: string };
