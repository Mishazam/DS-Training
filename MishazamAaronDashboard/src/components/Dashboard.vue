<template>
    <div id="app" class="container-fluid p-0">
        <div class="top-nav">
            <!-- Small screen icons -->
            <div class="media-screen-menu">
                <b-dropdown id="dropdown-1" class="border border-white" variant="none" no-caret>
                    <!-- Use the button-content slot to customize the dropdown trigger button -->
                    <template #button-content>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-list"
                            viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </template>
                    <b-dropdown-item>
                        <router-link to="/dashboard/profile" class="menu-item">Profile</router-link>
                    </b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>
                        <router-link to="/dashboard/users" class="menu-item">Users</router-link>
                    </b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>
                        <router-link to="/dashboard/candidates" class="menu-item">Candidates</router-link>
                    </b-dropdown-item>
                </b-dropdown>
            </div>
            <!-- Normal screen icons -->
            <router-link to="">
                <img class="picture-style" src="@/assets/formLogo.png">
            </router-link>
            <h4><b>BLING</b></h4>
            <div class="d-flex flex-row">
                <span class="name-initial me-2">
                    {{ nameInitial }}
                </span>
                <button class="logout-btn-style" @click="logout">Logout</button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 p-0 nav-style">
                <nav class="nav flex-column nav-pills nav-justified">
                    <router-link class="nav-item nav-item-style d-flex justify-content-around px-5 align-items-center"
                        to="/dashboard/profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white"
                            class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
                        <div class="w-75"><b>Profile</b></div>
                    </router-link>
                    <hr class="hr-custom">
                    <router-link class="nav-item nav-item-style d-flex justify-content-around px-5 align-items-center"
                        to="/dashboard/users">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white"
                            class="bi bi-people-fill" viewBox="0 0 16 16">
                            <path
                                d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        </svg>
                        <div class="w-75"><b>Users</b></div>
                    </router-link>
                    <hr class="hr-custom">
                    <router-link class="nav-item nav-item-style d-flex justify-content-around px-5 align-items-center"
                        to="/dashboard/candidates">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white"
                            class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fill-rule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                        <div class="w-75"><b>Candidates</b></div>
                    </router-link>
                    <hr class="hr-custom">
                    <!-- <router-link class="nav-item nav-item-style d-flex justify-content-around px-5 align-items-center"
                        to="/dashboard/users">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                            class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                            <path
                                d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                            <path
                                d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                        </svg>
                        <div class="w-75"><b>Student</b></div>
                    </router-link> -->
                </nav>
            </div>
            <div class="col-lg-10 col-md-12 custom-margin">
                <router-view></router-view>


                <button class="fixed-message-button" @click="popChat">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" class="bi bi-chat-dots-fill"
                        viewBox="0 0 16 16">
                        <path
                            d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                </button>
                <div v-if="chatWindow" class="message-box-style">
                    <div class="d-flex bg-light justify-content-between custom-bg-grey">
                        <h5>Bling Chat</h5>
                        <button class="close-button-style" @click="closeChat">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red"
                                class="bi bi-x-square-fill" viewBox="0 0 16 16">
                                <path
                                    d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                            </svg>
                        </button>
                    </div>

                    <div class="d-flex justify-content-end rounded-2 ">
                        <div class="bg-white border border-1 chat-box-dimension">
                            <div class="chat-window" ref="chatWindow">
                                <div v-for="chat in chatData">
                                    <div class="d-flex justify-content-start" v-if="chat.sid == 0">
                                        <p class="text-start msg-sent-style">{{ chat.message }}</p>
                                    </div>
                                    <div class="d-flex justify-content-end" v-if="chat.sid == 1">
                                        <p class="text-end msg-recieved-style">{{ chat.message }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="input-group">
                                <input type="text" class="form-control chat-input-font-style input-border-style"
                                    placeholder="Enter text" v-model="sentMessage" @keydown.enter="sendMessage">
                                <button class="btn btn-purple chat-input-font-style" @click="sendMessage">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div style="display: none;">
            <Edit :authObj="auth"></Edit>
        </div> -->
    </div>
</template>

<script>
import { io } from "socket.io-client";

export default {
    name: 'Dashboard',
    data() {
        return {
            nameInitial: '',
            chatWindow: false,
            sentMessage: '',
            recievedMessage: '',
            sid: '',
            chatData: [],
            chat: {},
            socket: '',
        };
    },
    created() {
        this.auth = JSON.parse(localStorage.getItem("Auth"));
        if (Object.keys(this.auth).length == 0) {
            this.$router.push('/');
        }
        else {
            // this.socket = io("http://192.168.11.208:8080"); // Zaid
            this.socket = io("http://192.168.11.209:8080"); // Muzamil
            // this.socket = io("http://192.168.11.212:3000"); // Zain
            this.getChat();
        }
        this.socket.on("chat message", (msg) => {
            this.recievedMessage = msg;
            this.chat = {
                sid: 0,
                message: this.recievedMessage,
            }
            this.chatData.push(this.chat);
            localStorage.setItem("Chat Data", JSON.stringify(this.chatData));
            // Scroll down chat
            this.$nextTick(() => {
                const chatWindow = this.$refs.chatWindow;
                chatWindow.scrollTop = chatWindow.scrollHeight;
            });
        });
    },
    mounted() {
        this.authCheck();
        this.popChatAfterMin();
    },
    methods: {
        getChat() {
            this.chatData = JSON.parse(localStorage.getItem("Chat Data"));
        },
        authCheck() {
            this.nameInitial = this.auth.user.Fname.charAt(0).toUpperCase() + this.auth.user.Lname.charAt(0).toUpperCase();
        },
        logout() {
            const auth = {};
            this.chatData = [];
            localStorage.setItem("Chat Data", JSON.stringify(this.chatData));
            localStorage.setItem("Auth", JSON.stringify(auth));
            // Destroy socket connection
            if (this.socket) {
                this.socket.disconnect();
            }
            this.$router.push('/');
        },
        popChat() {
            this.chatWindow = true;
            // Scroll down chat
            this.$nextTick(() => {
                const chatWindow = this.$refs.chatWindow;
                chatWindow.scrollTop = chatWindow.scrollHeight;
            });
        },
        // Pop chat box after 1 min
        popChatAfterMin() {
            this.socket.emit("chat message", "Hi");
            setTimeout(() => {
                this.chatWindow = true;
            }, 30000);
        },
        closeChat() {
            this.chatWindow = false;
        },
        sendMessage() {
            this.socket.emit("chat message", this.sentMessage);
            // Saving message as object
            this.chat = {
                sid: 1,
                message: this.sentMessage,
            };
            this.chatData.push(this.chat);
            this.sentMessage = '';
            // Setting local storage
            localStorage.setItem("Chat Data", JSON.stringify(this.chatData));
            // Scroll down chat
            this.$nextTick(() => {
                const chatWindow = this.$refs.chatWindow;
                chatWindow.scrollTop = chatWindow.scrollHeight;
            });
        },
    }
}
</script>

<style scoped>
@media screen and (max-width: 990px) {
    .message-box-style {
        width: 300px;
    }

    .media-screen-menu {
        display: block !important;
    }

    .picture-style {
        display: none !important;
    }

    .nav-style {
        display: none !important;
    }

    .media-display {
        display: flex !important;
        flex-direction: column;
    }

    .logout-btn-style {
        font-size: 10px;
    }
}

input[type=text]:focus {
    border: 3px solid rgb(80, 30, 99);
    box-shadow: none;
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

.btn-purple {
    background-color: black !important;
    color: white;
    border-radius: 0 0 5px 0;

}

.btn-purple:hover {
    color: white;
    background-color: #5a1677 !important;
}

.input-border-style {
    border-radius: 0 0 0 5px;
}

.chat-input-font-style {
    font-size: 13px;
}

.msg-div-width {
    width: 300px;
}

.msg-sent-style {
    background-color: #5a1677;
    color: white;
    border-radius: 5px;
    padding: 8px;
    margin-left: 5px;
    font-size: 14px;
    margin-right: 95px;
}

.msg-recieved-style {
    background-color: #951fc7;
    color: white;
    border-radius: 5px;
    padding: 8px;
    margin-right: 5px;
    font-size: 14px;
    margin-left: 98px;
}

.chat-window {
    width: 100%;
    height: 300px;
    overflow-y: auto;
    padding-top: 5px;
}

.btn-style {
    background-color: #6b1b8e;
    color: white;
}

.chat-box-dimension {
    width: 400px;
    border-radius: 7px;
}

.close-button-style {
    border: none;
    background-color: #d5d5d5;
    transition: transform .25s, opacity .25s;
    padding: 0;
}

.close-button-style:hover {
    opacity: 1;
    transform: rotate(90deg);
}

.custom-bg-grey {
    background-color: #d5d5d5 !important;
}

.fixed-message-button {
    position: fixed;
    bottom: 22px;
    right: 22px;
    text-align: center;
    z-index: 6;
    background-color: #6b1b8e;
    padding: 10px;
    border-radius: 25px;
    border: none;
}

.message-box-style {
    position: fixed;
    bottom: 80px;
    right: 26px;
    text-align: center;
    z-index: 6;
    background-color: #d5d5d5;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #5a1677;
}

/* .custom-margin{
    margin-right: 1px;
} */
.media-screen-menu {
    display: none;
}

.media-display {
    display: row;
}

.menu-item {
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
}

.hr-custom {
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
}

.name-initial {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6b1b8e;
    color: white;
    font-weight: 600;
    font-size: 15px;
    border-radius: 50%;
}

.picture-style {
    margin-left: 45px;
    display: block;
}

.logout-btn-style {
    background-color: #6b1b8e;
    border: none;
    border-radius: 3px;
    color: white;
    padding: 4px 20px;
}

.logout-btn-style:hover {
    background-color: #951fc7;
}

.top-nav {
    padding: 15px 10px 15px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 3;
    background-color: #201026;
    color: white;
}

.nav-style {
    margin-top: 10px;
    display: block;
    /* height: 100vh !important;
    padding-top: 10px !important;
    background: linear-gradient(180deg, rgba(32, 16, 38, 1) 40%, rgba(148, 37, 197, 1) 100%); */
}

.nav-item-style {
    color: white;
    padding: 10px;
    text-decoration: none;
}

.nav-item-style:hover {
    background-color: #5a1677 !important;
}
</style>