<html>

<head>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>Image annotation tool</h1>
    <div id="main">
        <button onclick="ShowAllLabels()">Show all labels</button>
        <div id="container">
            <?php
            echo "<img src='" . $_GET["imgId"] . "' id = 'imgToLabel'>";
            ?>
            <div class="text-block" id="text">
                <p>example label</p>
            </div>
        </div>
        <form action="welcome.php" method="post">
            <input type="text" name="X" id="X">
            <input type="text" name="Y" id="Y">
            Label: <input type="text" name="label" id="label" value="example label"><br>
            <input type="submit">
        </form>
    </div>
</body>
<script src="script.js"></script>
<script type="text/javascript">
    var myImg = document.getElementById("imgToLabel");
    myImg.onmousedown = GetCoordinates;
</script>

</html>