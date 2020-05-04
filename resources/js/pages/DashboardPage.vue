<template>
    <div>
        <breadcrumb-component current-page="Dashboard" />
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Sales Ratio</h4>
                            <div class="sales ct-charts mt-3"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title m-b-5">Referral Earnings</h5>
                            <h3 class="font-light">$769.08</h3>
                            <div class="m-t-20 text-center">
                                <div id="earnings"></div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title m-b-0">Users</h4>
                            <h2 class="font-light">35,658 <span class="font-16 text-success font-medium">+23%</span></h2>
                            <div class="m-t-30">
                                <div class="row text-center">
                                    <div class="col-6 border-right">
                                        <h4 class="m-b-0">58%</h4>
                                        <span class="font-14 text-muted">New Users</span>
                                    </div>
                                    <div class="col-6">
                                        <h4 class="m-b-0">42%</h4>
                                        <span class="font-14 text-muted">Repeat Users</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import _isEmpty from 'lodash/isEmpty';

export default {
    name: 'HomePage',

    components: {
        BreadcrumbComponent: () => import('@app/components/BreadcrumbComponent.vue')
    }
}
</script>