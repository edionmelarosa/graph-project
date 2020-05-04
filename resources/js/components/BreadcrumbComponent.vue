<template>
    <div class="page-breadcrumb">
        <div class="row">
            <div class="col-5 align-self-center">
                <h4 class="page-title">{{currentPage}}</h4>
            </div>
            <div class="col-7 align-self-center">
                <div class="d-flex align-items-center justify-content-end">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">{{currentPage}}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BreadcrumbComponent',
    
    props: {
        currentPage: {
            type: String,
            default: ''
        }
    }
}
</script>