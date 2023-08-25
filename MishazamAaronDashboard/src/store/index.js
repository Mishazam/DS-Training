import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // States for login
    fillFields: false,
    errMessage: '',
    credentialErr: false,
    credentialErrMessage: '',
    usersData: [],
    auth: {},
    // States for signup
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    duplicateEmail: false,
    errMessage: '',
  },
  getters: {},
  mutations: {
    // Login
    setCredentialError(state, value) {
      state.credentialErr = true;
      state.fillFields = false;
      state.credentialErrMessage = value;
    },
    setFillFieldsError(state, value) {
      state.credentialErr = false;
      state.fillFields = true;
      state.errMessage = value;
    },
    setUsersData(state, value) {
      state.usersData = value;
    },
    // Signup
    setErrMessage(state, value) {
      state.errMessage = value;
      state.duplicateEmail = true;
    },
    resetDuplicateEmail(state, value) {
      state.duplicateEmail = value;
    }
  },
  actions: {
    // Login Action
    async accessData({ state, commit }) {
      const logUser = {
        email: state.email,
        password: state.password,
      }
      await Vue.axios.post('http://192.168.11.209:8080/auth/login', logUser).then((response) => {
        console.log(response.data.message);
        // Status 200 for authentic user
        if (response.status === 200) {
          localStorage.setItem("Auth", JSON.stringify(response.data));
          window.location.assign("dashboard");
        }
      }).catch((error) => {
        console.log(error.response.data.error);
        commit("setCredentialError", error.response.data.error);
      });
      if (!state.email || !state.password) {
        commit("setFillFieldsError", "Fill all fields!");
        return;
      }
    },
    // SignUp Action
    async setFormData({ state, commit }) {
      const signUser = {
        Fname: state.firstName,
        Lname: state.lastName,
        email: state.email,
        password: state.password,
      }
      await Vue.axios.post('http://192.168.11.209:8080/auth/signup', signUser).then((response) => {
        console.log(response.data.message);
        this.duplicateEmail = false;
        commit("resetDuplicateEmail", false);
        window.location.reload();
      }).catch((error) => {
        commit("setErrMessage", error.response.data.error);
        console.log(error.response.data.error);
      });


      // this.usersData = JSON.parse(localStorage.getItem("Users")) || [];
      // if (this.usersData.length === 0) {
      //     var uniqueId = 1;
      // }
      // else {
      //     uniqueId = this.usersData[this.usersData.length - 1].id + 1;
      // }
      // const person = {
      //     id: uniqueId,
      //     firstName: fName,
      //     lastName: lName,
      //     email: email,
      //     password: password,
      // };
      // if (this.isDuplicateEmail(this.email, this.usersData)) {
      //     this.duplicateEmail = true;
      //     this.errMessage = "Email already exists!"
      //     return
      // }
      // else {
      //     this.duplicateEmail = false;
      //     this.errMessage = "";
      //     this.usersData.push(person);
      //     const strUsersData = JSON.stringify(this.usersData);
      //     localStorage.setItem("Users", strUsersData);
      //     window.location.reload();
      // }
    },
  },
  modules: {},
});
