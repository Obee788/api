<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>
    <h1>API</h1>
    <div class="container">
        <button class="btn btn-success" type="button" onclick="window.open('create.php')">Create</button>
        <table class="table table-success table-striped text-center">
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>Edit</th>
                <th>Delete</th>

            </tr>
            <tbody class="tbody">
            </tbody>

        </table>
    </div>

    <div id="htmlContainer"></div>


    <hr />

    <hr />
    <form id="deleteForm">
        <label for="userId">User ID:</label>
        <input type="text" id="userId" name="userId" required>
        <button type="submit">Delete User</button>
    </form>
    <form id="updateForm">
        <label for="id">User ID:</label>
        <input type="text" id="id" name="id" required>
        <label for="name">Name:</label>
        <input type="text" id="name1" name="name1" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <button type="submit">Update User</button>
    </form>



    <script src="app.js"></script>
    <script src="update.js"></script>
    <script src="read.js"></script>



</body>

</html>