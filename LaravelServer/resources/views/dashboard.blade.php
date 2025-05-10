<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<script>
    const sometext = "hello";

</script>

    <h1>Welcome {{$firstName}} {{$lastName}} to the admin dashboard</h1>
    
    <ul>
    <label for=""> <strong> - Your Details - </strong></label>
        <li>First name: {{$firstName}}</li>
        <li>Last Name: {{$lastName}}</li>
        <li>Associated Email: {{$email}}</li>
        <li>Account ID: {{$userID}}</li>
    </ul>

        <form action="/admin/logout/user" method="POST">
            @csrf
            <input type="submit" value="Log Out">
        </form>



</body>
</html>
