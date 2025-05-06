<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Registration </title>
</head>
<body>

<h1> PLEASE REGISTER HERE FOR A ADMIN ACCOUNT</h1>

<div>
    <form action="/admin/register" method="POST">

        @csrf

        <div>
            <label for="">First Name </label>
            <input type="text" name="first_name" maxlength="25" placeholder="Type first name" value="Redemption">
                <br>
            <label for="">Last Name </label>
            <input type="text" name="last_name" maxlength="25" placeholder="Type last name" value="Sauce">
        </div>

        <div>
            <label for="">Username</label>
            <input type="text" name="username" placeholder="e.g BeansCheese76" value="BeansCheese76">
                <br>
            <label for="">Email </label>
            <input type="email" name="email" maxlength="25" placeholder="" value="Dovakhiin@gmail.com">
                <br>
            <label for=""> Password </label>
            <input type="password" name="password" maxlength="25" minlength="7" placeholder="..." value="password123">
        </div>
        
        <input type="submit" value="Register">
    </form>
</div>

    
</body>
</html>