<template>
    <div>
        <div class="preloader">
            <div class="lds-ripple">
                <div class="lds-pos"></div>
                <div class="lds-pos"></div>
            </div>
        </div>
        <div 
            id="main-wrapper" 
            data-navbarbg="skin6" 
            data-theme="light" 
            data-layout="vertical" 
            data-sidebartype="full" 
            data-boxed-layout="full"
            :class="{'show-sidebar' : sidebarToggled}"
        >

            <header-component
                @navTogglerClicked="sidebarToggled = !sidebarToggled"
            />

            <sidebar-component />

            <div class="page-wrapper">

                <router-view></router-view>

                <footer-component />
            </div>
        </div>
    </div>
</template>
<script>
export default {
   name: 'App',

    data () {
        return {
            sidebarToggled: false
        }
    },

    methods: {
        toggleSidebar() {
            return !this.sidebarToggled;
        }
    },

   components: {
       
   }
}
</script>

<style lang="scss" scoped>
</style>