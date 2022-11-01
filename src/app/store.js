import { configureStore } from '@reduxjs/toolkit';
import {
  loadingReducer,
  lastReducer,
  scrollReducer,
  errorReducer,
  bucketsReducer,
  commentBucketsReducer,
  commentsReducer,
} from './reducer/productReducer';

export default configureStore({
  reducer: {
    loading: loadingReducer,
    last: lastReducer,
    scroll: scrollReducer,
    error: errorReducer,
    buckets: bucketsReducer,
    commnetBuckets: commentBucketsReducer,
    comments: commentsReducer,
  },
});
