import { queryAlbums } from '@/services/api'

const model = {
  namespace: 'albums',
  state: {
    init: false,
    list: []
  },
  reducers: {
    fetch(state, action) {
      const { payload } = action
      return { ...state, list: payload }
    }
  },
  effects: {
    *init(action, { put }) {
      const data = yield queryAlbums()
      yield put({
        type: 'fetch',
        payload: data
      })
    }
  }
}

export default model
