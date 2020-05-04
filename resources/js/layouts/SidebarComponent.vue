<template>
    <aside class="left-sidebar" data-sidebarbg="skin5">
        <!-- Sidebar scroll-->
        <div class="scroll-sidebar">
            <!-- Sidebar navigation-->
            <nav class="sidebar-nav">
                <ul id="sidebarnav">
                    <li class="sidebar-item">
                        <router-link 
                            to="/"
                            class="sidebar-link waves-effect waves-dark sidebar-link" 
                            aria-expanded="false"
                            :class="{'active' : $route.name === 'dashboard'}"
                        >
                            <i class="mdi mdi-av-timer"></i>
                            <span class="hide-menu">Dashboard</span>
                        </router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link 
                            to="/profile"
                            class="sidebar-link waves-effect waves-dark sidebar-link" 
                            aria-expanded="false"
                            :class="{'active' : $route.name === 'profile'}"
                        >
                            <i class="mdi mdi-account-network"></i>
                            <span class="hide-menu">Profile</span>
                        </router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link 
                            to="/graphs"
                            class="sidebar-link waves-effect waves-dark sidebar-link" 
                            aria-expanded="false"
                            :class="{'active' : $route.name === 'graphs'}"
                        >
                            <i class="mdi mdi-border-none"></i>
                            <span class="hide-menu">Graphs</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
            <!-- End Sidebar navigation -->
        </div>
        <!-- End Sidebar scroll-->
    </aside>
</template>
<script>
export default {
    name: 'SidebarComponent',

    created() {
        console.log(this.$route)
    }
}
</script>