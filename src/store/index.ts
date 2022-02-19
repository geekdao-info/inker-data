import { createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist';
import { useAppStore } from './modules/app';
import { useUserStore } from './modules/user';
import { useProfileInfoState } from './modules/profileInfo';
import { useProfileStore } from './modules/profile';
import { useAccountInfoState } from './modules/accountInfo';
import { usePartyState } from './modules/party';

const pinia = createPinia();
pinia.use(piniaPluginPersist);

export {
  useAppStore,
  useUserStore,
  useProfileInfoState,
  useProfileStore,
  useAccountInfoState,
  usePartyState,
};
export default pinia;
