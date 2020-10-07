export default {
  state: () => ({
    bodyClass: [],
    isDetail: false,
    isCompleteDetail: false,
  }),
  actions: {
    controlBodyClass({ commit }, {controlClass, command = 'add', overriteClass}) {
      commit('SET_BODYClASS', {controlClass, command, overriteClass});
    },
    setIsDetail({ commit }, {isDetail}) {
      commit('SET_BODYClASS', {controlClass: 'detail', command: isDetail ? 'add' : 'remove'});
      commit('SET_ISCOMPLETEDETAIL', {isCompleteDetail: false});
      commit('SET_ISDETAIL', {isDetail});
    },
    setIsCompleteDetail({ commit }, {isCompleteDetail}) {
      commit('SET_ISCOMPLETEDETAIL', {isCompleteDetail});
    }
  },
  mutations: {
    SET_BODYClASS(state, {controlClass, command, overriteClass}) {
      const {bodyClass} = state;
      switch(command) {
        case 'add':
          bodyClass.push(controlClass);
          break;
        case 'remove':
          if(bodyClass.indexOf(controlClass) !== -1) {
            bodyClass.splice(bodyClass.indexOf(controlClass),1);
          }
          break;
        case 'toggle':
          if(bodyClass.indexOf(controlClass) !== -1) {
            bodyClass.splice(bodyClass.indexOf(controlClass),1);
          } else {
            bodyClass.push(controlClass);
          }
          break;
        case 'overwrite':
          bodyClass.splice(bodyClass.indexOf(controlClass),1, overriteClass);
          break;
      }
      state.bodyClass = Array.from(new Set(bodyClass));
    },
    SET_ISDETAIL(state, {isDetail}) {
      state.isDetail = isDetail;
    },
    SET_ISCOMPLETEDETAIL(state, {isCompleteDetail}) {
      state.isCompleteDetail = isCompleteDetail;
    },
  },
  getters: {
    bodyClass: (state) => {
      return state.bodyClass.join(' ');
    },
    isDetail: (state) => {
      return state.isDetail;
    },
    isCompleteDetail: (state) => {
      return state.isCompleteDetail;
    },
  }
}
