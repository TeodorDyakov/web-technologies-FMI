<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>Image annotation tool</h1>
    <div id="main">
        <p>Това е просто приложение за анотиране на картинки. Напишете текста на анотацията във полето 'Label', след това натиснете Add new Label, за да запазите анотацията.</p>
        <button id = "show_btn" onclick="ButtonClick()">Show all labels</button>
        <div id="container">

            <?php
            echo "<img src='" . $_GET["imgId"] . "' id = 'imgToLabel'>";
            ?>

            <div id = "form_cont">
                <form action="labels_db.php" method="post">

                <label for = "label">Label</label>
                    <input type="text" name="label" id="label" value="example label"><br>
                    
                    <label for = "X">X</label>
                    <input type="text" name="X" id="X">

                    <label for = "label">Y</label>
                    <input type="text" name="Y" id="Y">
                    
                    <button type="button" onclick="SaveLabel()">Add new label</button>
                </form>
                <p id = "message"></p>
            </div>

            <div class="text-block" id="text">
                <p>example label</p>
            </div>
        </div>

    </div>
</body>
<script src="script.js"></script>
<script type="text/javascript">
    var myImg = document.getElementById("imgToLabel");
    myImg.onmousedown = GetCoordinates;
</script>

</html>