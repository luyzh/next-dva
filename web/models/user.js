import { queryUserById } from '@/services/api'

const model = {
  namespace: 'users',
  state: {
    init: false,
    item: {}
  },
  reducers: {
    fetch(state, action) {
      const { payload } = action
      return { ...state, item: payload }
    }
  },
  effects: {
    *init(action, { put }) {
      const data = yield queryUserById()
      yield put({
        type: 'fetch',
        payload: data
      })
    }
  }
}

export default model
