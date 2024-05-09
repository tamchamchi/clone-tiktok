//Layout
import { HeaderOnly } from '~/components/Layout';

import HomePage from '~/pages/Home'
import FollowingPage from '~/pages/Following';
import UploadPage from '~/pages/Upload';
import ProfilesPage from '~/pages/Profiles';
import SearchPage from '~/pages/Search';

export const publicRoutes = [
     {
          path: '/',
          component: HomePage
     },
     {
          path: '/following',
          component: FollowingPage
     },
     {
          path: '/profiles',
          component: ProfilesPage
     },
     {
          path: '/upload',
          component: UploadPage,
          layout: HeaderOnly
     },
     {
          path: '/search',
          component: SearchPage,
          layout: null
     }

]

export const privateRoutes = [

]
