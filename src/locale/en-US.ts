import localeWinners from '@/pages/winners/locale/en-US';
import localeProfile from '@/pages/profile/locale/en-US';
import localeProfileInfo from '@/pages/profileInfo/locale/en-US';
import localeDonate from '@/pages/donate/locale/en-US';
import localeRoadmap from '@/pages/roadmap/locale/en-US';
import localeFaq from '@/pages/faq/locale/en-US';

import localeMessageBox from '@/components/message-box/locale/en-US';

import locale403 from '@/pages/exception/403/locale/en-US';
import locale404 from '@/pages/exception/404/locale/en-US';
import locale500 from '@/pages/exception/500/locale/en-US';

import localeSettings from './en-US/settings';

export default {
  'menu.dashboard': 'Dashboard',
  'navbar.action.locale': 'Switch to English',
  ...localeSettings,
  ...localeMessageBox,
  ...localeWinners,
  ...localeProfile,
  ...localeProfileInfo,
  ...localeDonate,
  ...localeRoadmap,
  ...localeFaq,
  ...locale403,
  ...locale404,
  ...locale500,
};