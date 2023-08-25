<template>
    <div id="users">
        <div class="welcome-text">
            <h5>Details of <span class="users-title-color"><b>USERS</b></span></h5>
            <div>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#9425c5"
                        class="bi bi-pencil-fill me-2" viewBox="0 0 16 16">
                        <path
                            d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                    </svg>
                </a>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#9425c5"
                        class="bi bi-filter-circle-fill me-2" viewBox="0 0 16 16">
                        <path
                            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM3.5 5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zM5 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </a>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#9425c5"
                        class="bi bi-funnel-fill me-2" viewBox="0 0 16 16">
                        <path
                            d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
                    </svg>
                </a>
            </div>
        </div>
        <div>
            <Loader v-if="isLoading"></Loader>
        </div>
        <!-- Users details table -->
        <div class="table-responsive rounded rounded-2">
            <table class="table">
                <thead>
                    <tr class="text-center">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>User Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center" v-for="user in users" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.name }}</td>
                        <td>{{ user.username }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.phone }}</td>
                        <td>
                            <button class="view-btn-style" @click="showDetails(user.address, user.name)">View</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="modal" v-if="showModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="modal-title"><b>{{ userName }}</b></div>
                        <button type="button " class="close btn btn-outline-danger" @click="closeModal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body media-modal-font">
                        <div class="row">
                            <div class="col-6 text-center">
                                <p class="text-success">Address</p>
                                <hr>
                            </div>
                            <div class="col-6 text-center">
                                <p class="text-success">Geo Location</p>
                                <hr>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 ps-5">
                                <p><strong>City:</strong> {{ addressDetails.city }}</p>
                            </div>
                            <div class="col-6 ps-5">
                                <p><strong>Latitude:</strong> {{ addressDetails.geo.lat }}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 ps-5">
                                <p><strong>Street:</strong> {{ addressDetails.street }}</p>
                            </div>
                            <div class="col-6 ps-5">
                                <p><strong>Longitude:</strong> {{ addressDetails.geo.lng }}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 ps-5">
                                <p><strong>Suite:</strong> {{ addressDetails.suite }}</p>
                            </div>
                            <div class="col-6 ps-5">
                                <p><strong>Zipcode:</strong> {{ addressDetails.zipcode }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import Loader from '@/components/Loader.vue';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

export default {
    name: 'Users',
    components: {
        Loader
    },
    data() {
        return {
            users: [],
            selectedUser: null,
            showModal: false,
            isLoading: false,
        };
    },
    beforeMount() {
        this.getRequest()
    },
    methods: {
        getRequest() {
            this.isLoading = true;
            Vue.axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
                this.users = response.data;
            });
            setTimeout(() => {
                this.isLoading = false;
            }, 2000);
        },
        modalView() {
            this.showModal = true;
        },
        showDetails(address, name) {
            this.userName = name;
            this.addressDetails = address;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
    }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
    .welcome-text {
        margin: 20px 0 15px 0 !important;
        padding: 0 5px 0 10px !important;
        font-size: 12px !important;
    }

    .media-table-font {
        font-size: 12px !important;
    }

    .table {
        font-size: 11px !important;
    }

    .media-modal-font {
        font-size: 10px !important;
    }

    #users {
        margin: 0 3px;
    }
}

#users {
    margin-right: 8px;
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

.table {
    border-color: #9425c5 !important;
    font-size: 15px;
}

.users-title-color {
    color: #500d68;
    font-size: 30px;
}

.view-btn-style {
    background-color: white;
    color: #9425c5;
    border: 2px solid #9425c5;
    border-radius: 3px;
    padding: 2px 20px;
}

.view-btn-style:hover {
    background-color: #9425c5;
    color: white;
}

.modal {
    display: block !important;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>