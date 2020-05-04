<template>
    <div>
        <breadcrumb-component current-page="Profile"/>
        <div class="container-fluid">
            <h1 class="text-danger">Profile page</h1>
        </div>
    </div>
</template>
<script>
import _isEmpty from 'lodash/isEmpty';

export default {
    name: 'HomePage',

    components: {
        BreadcrumbComponent: () => import('@app/components/BreadcrumbComponent.vue')
    },

    created () {
        console.log(_isEmpty(null));
    }
}
</script>