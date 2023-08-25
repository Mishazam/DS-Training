<template>
    <div id="users">
        <div class="welcome-text me-2">
            <h5>Details of <span class="users-title-color"><b>REGISTERED USERS</b></span></h5>
            <div class="d-flex">
                <!-- Search registered users -->
                <div class="d-flex">
                    <input autocomplete="off" class="mt-1 mb-1 px-2 search-bar-style" id="inputSearch" type="search" v-model="userToSearch"
                        placeholder="Search User">
                    <!-- <button class="mt-1 mb-1 search-button" type="submit" @click="searchUser">Search</button> -->
                </div>
                <!-- Filters dropdown -->
                <b-dropdown id="dropdown-1" class="border border-white" variant="none" no-caret>
                    <template #button-content>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#9425c5"
                            class="bi bi-funnel-fill me-2 pointer-style" viewBox="0 0 16 16">
                            <path
                                d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
                        </svg>
                    </template>
                    <b-dropdown-item>
                        <div @click="ascendingSort">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#9425c5"
                                class="bi bi-sort-up me-2 pointer-style" viewBox="0 0 16 16">
                                <path
                                    d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                            </svg>
                            <span class="font-12-style">Ascending Sort</span>
                        </div>
                    </b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>
                        <div @click="descendingSort">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#9425c5"
                                class="bi bi-sort-down-alt me-2 pointer-style" viewBox="0 0 16 16">
                                <path
                                    d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z" />
                            </svg>
                            <span class="font-12-style">Descending Sort</span>
                        </div>
                    </b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>
                        <div @click="acceptedCandidates">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#9425c5"
                                class="bi bi-check-circle me-2" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path
                                    d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                            </svg>
                            <span class="font-12-style">Accepted Candidates</span>
                        </div>
                    </b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>
                        <div @click="rejectedCandidates">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#9425c5"
                                class="bi bi-x-circle me-2" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                            <span class="font-12-style">Rejected Candidates</span>
                        </div>
                    </b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>
                        <div @click="getUsers">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#9425c5"
                                class="bi bi-people me-2" viewBox="0 0 16 16">
                                <path
                                    d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                            </svg>
                            <span class="font-12-style">All Candidates</span>
                        </div>
                    </b-dropdown-item>
                </b-dropdown>
            </div>
        </div>

        <div class="me-2 custom-table-bg">
            <b-table responsive="md" class="table-style" id="my-table" :items="users" :per-page="perPage" :fields="fields"
                :current-page="currentPage" small>
                <template #cell(CV)="row">
                    <div @click="generateDownloadLink(row.item._id)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#9425c5"
                            class="bi bi-cloud-arrow-down-fill pointer-style" viewBox="0 0 16 16">
                            <path
                                d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z" />
                        </svg>
                    </div>
                </template>
                <template #cell(Status)="row">
                    <span v-if="row.item.status == `accepted`" class="text-success">Accepted</span>
                    <span v-if="row.item.status == `rejected`" class="text-danger">Rejected</span>
                    <span v-if="row.item.status == `pending`" class="text-warning">Pending</span>
                </template>
                <!-- Icons to accept or reject applicant -->
                <template #cell(Action)="row">
                    <div class="d-flex justify-content-center">
                        <!-- Button to trigger the modal -->
                        <button type="button" v-b-tooltip.hover title="Accept Candidate"
                            @click="acceptStatus(row.item.email)" class="modal-button-style">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green"
                                class="bi bi-check-circle-fill pointer-style" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                        </button>
                        <!-- Button to trigger the modal -->
                        <button type=" button" v-b-tooltip.hover title="Reject Candidate"
                            @click="rejectStatus(row.item.email, false)" class="modal-button-style">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red"
                                class="bi bi-x-circle-fill pointer-style" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                            </svg>
                        </button>
                    </div>
                </template>
            </b-table>
        </div>
        <!-- <b-pagination class="mt-3" align="center" v-model="currentPage" :total-rows="rows" :per-page="perPage"
            aria-controls="my-table">
        </b-pagination> -->
        <div class="mt-5">
            <b-pagination align="center" v-model="currentPage" pills :total-rows="rows" :per-page="perPage"
                aria-controls="my-table"></b-pagination>
        </div>

        <!-- Confirmation modal -->
        <b-modal id="status-modal" centered hide-footer hide-header>
            <div class="d-block text-center mb-4">
                <h5 v-if="statusAction">Are you sure you want to <span class="text-success">{{ statusMessage }}</span> this
                    candidate?</h5>
                <h5 v-else>Are you sure you want to <span class="text-danger">{{ statusMessage }}</span> this candidate?</h5>
            </div>
            <b-button class="mt-3 d-block w-100" variant="outline-success" @click="modalConfirm">Yes</b-button>
            <b-button class="mt-2 d-block w-100" variant="outline-danger" @click="modalCancel">No</b-button>
        </b-modal>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);
// import { BModal, VBModal } from 'bootstrap-vue';
import { BModal, BButton } from 'bootstrap-vue';

import { BTooltip } from 'bootstrap-vue';


export default {
    name: "Candidates",
    data() {
        return {
            users: [],
            userToSearch: '',
            fileData: '',
            perPage: 10,
            currentPage: 1,
            statusEmail: '',
            statusAction: false,
            statusMessage: '',
        }
    },
    watch: {
        // Watcher to search user typed in search bar
        userToSearch(newVal) {
            this.searchUser(newVal);
        }
    },
    components: {
        'b-modal': BModal,
        'b-button': BButton,
        // 'v-b-modal': VBModal,
        'b-tooltip': BTooltip,
    },
    computed: {
        rows() {
            return this.users.length
        },
        fields() {
            return [
                { key: 'Fname', label: 'First Name' },
                { key: 'Lname', label: 'Last Name' },
                { key: 'phoneNo', label: 'Phone Number' },
                { key: 'email', label: 'Email' },
                { key: 'CV', label: 'CV' },
                { key: 'Status', label: 'Status' },
                { key: 'Action', label: 'Action' },
            ];
        },
    },
    mounted() {
        this.getUsers();
        // this.acceptStatus("af");
    },
    methods: {
        openModal() {
            this.$bvModal.show('status-modal');
        },
        acceptStatus(userEmail) {
            this.statusEmail = userEmail;
            this.statusAction = true;
            this.statusMessage = "ACCEPT";
            this.openModal();
        },
        rejectStatus(userEmail) {
            this.statusEmail = userEmail;
            this.statusAction = false;
            this.statusMessage = "REJECT";
            this.openModal();
        },
        // Update status of registered users
        async updateStatus(userEmail, bool) {
            if (bool) {
                const userStatus = {
                    email: userEmail,
                    status: "accepted",
                }
                await Vue.axios.post('http://192.168.11.209:8080/function/update-status', userStatus).then((response) => {
                    console.log(response.data.message);
                }).catch((error) => {
                    console.log(error);
                });
            }
            else {
                const userStatus = {
                    email: userEmail,
                    status: "rejected",
                }
                await Vue.axios.post('http://192.168.11.209:8080/function/update-status', userStatus).then((response) => {
                    console.log(response.data.message);
                }).catch((error) => {
                    console.log(error);
                });
            }
            this.getUsers();

        },
        modalConfirm() {
            this.updateStatus(this.statusEmail, this.statusAction);
            this.$bvModal.hide('status-modal');
        },
        modalCancel() {
            this.statusEmail = '';
            this.statusAction = false;
            this.$bvModal.hide('status-modal');
        },
        // Filter accepted candidates
        async rejectedCandidates() {
            await Vue.axios.get('http://192.168.11.209:8080/function/filter-by?query=rejected').then((response) => {
                this.users = response.data;
            }).catch((error) => {
                console.log(error);
            });
        },
        // Filter rejected candidates
        async acceptedCandidates() {
            await Vue.axios.get('http://192.168.11.209:8080/function/filter-by?query=accepted').then((response) => {
                this.users = response.data;
            }).catch((error) => {
                console.log(error);
            });
        },
        // Get all registered users
        async getUsers() {
            await Vue.axios.get('http://192.168.11.209:8080/auth/user').then((response) => {
                console.log(response);
                this.users = response.data;
            }).catch((error) => {
                console.log(error);
            });
        },
        // Function to download CV  
        async generateDownloadLink(userId) {
            const response = await Vue.axios.get(`http://192.168.11.209:8080/function/cv/${userId}`, {
                responseType: 'arraybuffer' // Setting to arraybuffer to read binary file given in response
            });
            const contentType = response.headers['content-type']; // Content type from response headers to get file extension
            const blob = new Blob([response.data], { type: contentType });
            const url = window.URL.createObjectURL(blob); //Creating temp url for donwload
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'CV');
            link.click();
        },
        async ascendingSort() {
            await Vue.axios.get('http://192.168.11.209:8080/function/sort?field=email&order=asc').then((response) => {
                // console.log(response);
                this.users = response.data;
            }).catch((error) => {
                console.log(error);
            });
        },
        async descendingSort() {
            await Vue.axios.get('http://192.168.11.209:8080/function/sort?field=email&order=desc').then((response) => {
                this.users = response.data;
            }).catch((error) => {
                console.log(error);
            });
        },
        // Function to search user
        // New value in parameter as typed in search bar 
        async searchUser(val) {
            await Vue.axios.get(`http://192.168.11.209:8080/function/search?query=${val}`).then((response) => {
                this.users = response.data;
            }).catch((error) => {
                console.log(error);
            });
        }
    },
}
</script>

<style scoped>
@media screen and (max-width: 990px) {
    .welcome-text {
        flex-direction: column !important;
    }
}

.modal-button-style {
    background: none;
    border: none;
    color: white;
}

#inputSearch::-webkit-search-cancel-button {
    color: #500d68;
    background-color: #500d68;
}

.custom-table-bg {
    background-color: white;
    height: 425px;
}

.font-12-style {
    font-size: 15px;
}

.pointer-style:hover {
    cursor: pointer;
}

.search-button {
    background-color: #9425c5;
    color: white;
    border: none;
    border-radius: 0 4px 4px 0;
    font-size: 13px;
}

.search-bar-style {
    border: 1px solid #9425c5;
    border-radius: 4px;
    font-size: 13px;
}

.search-bar-style:focus {
    outline: none;
}

.table-style {
    border-color: #9425c5 !important;
    font-size: 15px;
    text-align: center;
}

.users-title-color {
    color: #500d68;
    font-size: 30px;
}

.welcome-text {
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 15px 0;
    border-radius: 7px;
    padding: 9px;
    box-shadow: 0 0 10px 2px rgba(128, 0, 128, 0.5);
}
</style>