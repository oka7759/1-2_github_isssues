import { createSlice } from '@reduxjs/toolkit';

export const loading = createSlice({
  name: 'loading',
  initialState: { value: false },
  reducers: {
    nowLoading: state => {
      state.value = true;
    },
    complet: state => {
      state.value = false;
    },
  },
});
export const { complet, nowLoading } = loading.actions;
export const loadingReducer = loading.reducer;

export const last = createSlice({
  name: 'last',
  initialState: { value: false },
  reducers: {
    isLast: state => {
      state.value = true;
    },
  },
});
export const { isLast } = last.actions;
export const lastReducer = last.reducer;

export const scroll = createSlice({
  name: 'scroll',
  initialState: { value: 1 },
  reducers: {
    isScroll: state => {
      state.value += 1;
    },
  },
});
export const { isScroll } = scroll.actions;
export const scrollReducer = scroll.reducer;

export const error = createSlice({
  name: 'error',
  initialState: { value: '' },
  reducers: {
    errorMessage: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { errorMessage } = error.actions;
export const errorReducer = error.reducer;

export const buckets = createSlice({
  name: 'buckets',
  initialState: { value: [] },
  reducers: {
    getBuckets: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
  },
});
export const { getBuckets } = buckets.actions;
export const bucketsReducer = buckets.reducer;

export const commentBuckets = createSlice({
  name: 'commentBuckets',
  initialState: { value: {} },
  reducers: {
    getCommentBuckets: (state, action) => {
      state.value = [action.payload];
    },
    removeCommentBuckets: state => {
      state.value = [];
    },
  },
});
export const { getCommentBuckets, removeCommentBuckets } =
  commentBuckets.actions;
export const commentBucketsReducer = commentBuckets.reducer;

export const comments = createSlice({
  name: 'comments',
  initialState: { value: [] },
  reducers: {
    getComments: (state, action) => {
      state.value = [action.payload];
    },
  },
});
export const { getComments } = comments.actions;
export const commentsReducer = comments.reducer;
