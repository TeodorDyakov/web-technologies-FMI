<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>PHP-Test</title>
	</head>
	<body>
		<form method = "post" action = "add-course.php">
			<div>
				<label for = "course-title"> Име на курс </label>
				<input id = "course-title" name = "title">
			</div>
			<div>
				<label for = "professor"> Преподавател </label>
				<input id = "professor" name = "professor">
			</div>
			<div>
				<label for = "description"> Описание </label>
				<textarea id = "description" name = "description">
				</textarea>
			</div>
			<div>
				<label for = "group"> Група </label>	
				<select name = "group">
					 <optgroup label="Group">
					 <option value="KN"> М </option>
					 <option value="SI"> ПМ </option>
					 <option value="OKN"> ОКН </option>
					 <option value="QKN"> ЯКН </option>
				</select>
			</div>
			<div>
				<label for = "credits"> Кредити </label>
				<input id = "credits" name = "credits" type = "number">
			</div>
 			<button enabled> Submit </button>
		</form>
	</body>
</html>
