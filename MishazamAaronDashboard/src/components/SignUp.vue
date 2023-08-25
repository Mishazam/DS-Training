<template>
    <div id="app">
        <div class="container container-shahdow">
            <div class="row row-style-media">
                <div class="col-lg-4 p-3 left-part">
                    <p>BLING</p>
                    <div class="text-center">
                        <img class="picture-style" src="@/assets/formLogo.png">
                    </div>
                </div>
                <div class="col-lg-8 col-md-12">
                    <div class="form-display">
                        <h5 class="header-color-style">CREATE ACCOUNT</h5>
                        <form class="text-secondary" @submit.prevent="signup" autocomplete="off">
                            <div class="row gutter-style">
                                <div class="col-md-6">
                                    <!-- First Name -->
                                    <div class="form-floating mt-3">
                                        <input type="text" class="form-control" v-model="$store.state.firstName" placeholder="First Name" required>
                                        <label>First Name</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <!-- Last Name -->
                                    <div class="form-floating mt-3">
                                        <input type="text" class="form-control" v-model="$store.state.lastName" placeholder="Last Name" required>
                                        <label>Last Name</label>
                                    </div>
                                </div>
                            </div>
                            <!-- Email -->
                            <div class="form-floating mt-3">
                                <input type="email" class="form-control" v-model="$store.state.email" placeholder="Enter Email" required>
                                <label>Email</label>
                            </div>
                            <span v-if="$store.state.duplicateEmail" class="dupli-err">{{ $store.state.errMessage }}</span>
                            <!-- Passowrd -->
                            <div class="form-floating mt-3 mb-3">
                                <input type="password" class="form-control" v-model="$store.state.password" placeholder="Enter password" required>
                                <label>Password</label>
                            </div>
                            <!-- Signin button -->
                            <div class="input-group button-center">
                                <button type="submit" class="button-style">Sign Up</button>
                            </div>
                        </form>
                        <hr width="100%">
                        <p class="further-action">
                            Already have an account!
                            <router-link class="router-style" to="/">LogIn</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { io } from "socket.io-client";
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

export default {
    name: 'SignUp',
    data() {
        return {

        };
    },
    methods: {
        async signup() {
            await this.$store.dispatch("setFormData");
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
    .left-part {
        display: none !important;
    }

    .right-part {
        width: 100% !important;
    }

    .container {
        width: 100% !important;
    }

    .container-shahdow {
        box-shadow: none !important;
    }

    .row-style-media {
        width: 100% !important;
        left: 10px !important;
        position: absolute !important;
        margin-top: 70px !important;
    }

    .header-color-style {
        color: white !important;
    }

    .further-action {
        color: white !important;
    }

    .router-style {
        color: rgb(182, 162, 214) !important;
    }

    .form-display {
        margin: 0 !important;
    }

}

#app {
    overflow-x: hidden;
    padding-bottom: 10px;
    height: 100vh;
    background-image: url('@/assets/background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.gutter-style {
    --bs-gutter-x: 15px;
}

input[type=email]:focus {
    border: 3px solid rgb(80, 30, 99);
    box-shadow: none;
}

input[type=password]:focus {
    border: 3px solid rgb(80, 30, 99);
    box-shadow: none;
}

input[type=text]:focus {
    border: 3px solid rgb(80, 30, 99);
    box-shadow: none;
}

label {
    font-size: 13px !important;
}

.header-color-style {
    color: rgb(80, 30, 99);
}

.dupli-err {
    color: red;
    font-size: 12px;
}

.form-display {
    height: 400px;
    margin: 5% 2% 5% 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

label {
    font-size: 15px;
}

.container {
    margin-top: 7%;
    width: 55% !important;
    background-color: white;
}

.picture-style {
    width: 85%;
    border-radius: 8px;
}

.left-part {
    color: white;
    border-radius: 4px 0 0 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(32, 16, 38);
    background: linear-gradient(180deg, rgba(32, 16, 38, 1) 40%, rgba(77, 10, 107, 1) 100%);
}

.container-shahdow {
    box-shadow: 0px 0px 13px -1px black;
    border-radius: 5px;
}

.button-center {
    display: flex;
    justify-content: center;
}

.button-style {
    background-color: rgb(80, 30, 99);
    width: 140px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    color: white;
}

.button-style:hover {
    background-color: rgb(140, 44, 179);
}

.router-style {
    color: rgb(80, 30, 99);
    text-decoration: none;
}

.router-style:hover {
    color: rgb(140, 44, 179);
    text-decoration: underline;
}

.further-action {
    text-align: center;
    color: grey;
    font-size: 13px;
}
</style>