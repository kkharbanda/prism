const notificationsModule = {
  namespaced: true,
  state() {
    return {
      toastMsg: ["false", "", "error"],
      loader:true,
    };
  },
  getters: {
    getToastMsg(state){
        return state.toastMsg;
    },
    isLoading(state){
      return state.loader;
  }
  },
  mutations: {
    setToastMsg(state,payload){
        state.toastMsg = [true,payload.msg,payload.type]
    }, setLoading(state,payload){
      state.loader = payload
  }
  },
};

export default notificationsModule;
