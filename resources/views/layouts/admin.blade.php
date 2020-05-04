<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Graph Project</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Custom CSS -->
        <link href="./nice-admin/dist/css/style.min.css" rel="stylesheet" > 
        <link href="{{ mix('css/app.css') }}" rel="stylesheet" >

    </head>
    <body>
        @yield('content')

        <script src="./nice-admin/assets/libs/jquery/dist/jquery.min.js"></script>
        <script src="./nice-admin/assets/libs/popper.js/dist/umd/popper.min.js"></script>
        <script src="./nice-admin/assets/libs/bootstrap/dist/js/bootstrap.min.js"></script>
        <script src="./nice-admin/assets/extra-libs/sparkline/sparkline.js"></script>
        
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
