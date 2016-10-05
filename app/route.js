/**
 * Created by lipeiwei on 16/10/4.
 */
import {
  Platform,
} from 'react-native';
import MainContainer from './container/mainContainer';
import BeforeMonthList from './component/beforeMonthList';
import BeforePictureList from './component/beforePictureList';
import PicturePage from './component/picturePage';
import ImageViewer from './component/imageViewer';
import ReadingCarouselDetail from './component/readingCarouselDetail';
import ReadingBeforeMonthList from './component/readingBeforeMonthList'
import ReadingArticleList from './component/readingArticleList';

let navigator;

const routeMap = new Map();

routeMap.set('MainContainer', MainContainer);
routeMap.set('BeforeMonthList', BeforeMonthList);
routeMap.set('BeforePictureList', BeforePictureList);
routeMap.set('PicturePage', PicturePage);
routeMap.set('ImageViewer', ImageViewer);
routeMap.set('ReadingCarouselDetail', ReadingCarouselDetail);
routeMap.set('ReadingBeforeMonthList', ReadingBeforeMonthList);
routeMap.set('ReadingArticleList', ReadingArticleList);


export function registerNavigator(tempNavigator) {
  if (navigator) {
    return;
  }
  navigator = tempNavigator;

}

export function getNavigator() {
  return navigator;
}

export function getRouteMap() {
  return routeMap;
}






