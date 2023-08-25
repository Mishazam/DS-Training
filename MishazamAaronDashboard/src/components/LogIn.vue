<template>
    <div id="app">
        <div class="container container-shahdow">
            <div class="row row-style-media">
                <div class="col-md-4 p-3 left-part">
                    <p>BLING</p>
                    <div class="text-center">
                        <img class="picture-style" src="@/assets/formLogo.png">
                    </div>
                </div>
                <div class="col-md-8 col-sm-12 right-part">
                    <div class="form-display">
                        <div class="">
                            <h4 class="header-color-style">WELCOME</h4>
                        </div>
                        <form class="text-secondary form-text-style" @submit.prevent="login" autocomplete="off">
                            <div class="">
                                <!-- Email -->
                                <div class="form-floating mt-3 mb-3">
                                    <input type="email" class="form-control" v-model="$store.state.email"
                                        placeholder="Enter email">
                                    <label>Email</label>
                                </div>
                            </div>
                            <div class="">
                                <!-- Passowrd -->
                                <div class="form-floating mt-3 mb-3">
                                    <input type="password" class="form-control" v-model="$store.state.password"
                                        placeholder="Enter password">
                                    <label>Password</label>
                                </div>
                            </div>
                            <!-- Field error display -->
                            <p class="fill-fields-err text-center" v-if="$store.state.fillFields">{{ $store.state.errMessage
                            }}
                            </p>
                            <p class="fill-fields-err text-center" v-if="$store.state.credentialErr">
                                {{ $store.state.credentialErrMessage }}
                            </p>
                            <!-- Form submit button -->
                            <div class="input-group button-center">
                                <button type="submit" class="button-style">Log In</button>
                            </div>
                        </form>
                        <hr width="100%">
                        <p class="further-action">
                            Don't have an account
                            <router-link class="router-style" to="/signup">SignUp</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'LogIn',
    data() {
        return {

        };
    },
    methods: {
        async login() {
            await this.$store.dispatch("accessData");
        },
    },

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

input[type=email]:focus {
    border: 3px solid rgb(80, 30, 99);
    box-shadow: none;
}

input[type=password]:focus {
    border: 3px solid rgb(80, 30, 99);
    box-shadow: none;
}

.form-display {
    height: 400px;
    margin: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

label {
    font-size: 13px !important;
}

.fill-fields-err {
    color: red;
    font-size: 12px;
}

input[type="text"] {
    font-size: 15px !important;
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
    border-radius: 5px 0 0 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(32, 16, 38);
    background: linear-gradient(180deg, rgba(32, 16, 38, 1) 40%, rgba(77, 10, 107, 1) 100%);

}

.container-shahdow {
    box-shadow: 0px 0px 13px -1px black;
    border-radius: 6px;
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

.header-color-style {
    color: rgb(80, 30, 99);
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