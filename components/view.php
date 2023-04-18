<div class="container text-center">
    <div class="glass-box"></div>
    <div class="row align-items-center content-box" style="padding-bottom: 80px;">
        <div class="ornament3"></div>
        <div class="col-12 title" style="margin-bottom: 20px;">
            <img src="image/Logo Bisma-5.png" class="logo">
            <h5 class="tagline" style="font-family: 'Croissant One', cursive; font-weight: bold;">It’s The Best Thing Since Sliced Bread!</h5>
        </div>

        <div class="col-sm-12 col-md-6" style="padding: 0; position: relative;">
            <div class="body" id="contentBody" style="background-color: #<?php echo $_GET['body'] ?>"></div>
            <div class="velg velg-rear contentVelg" style="background-color: #<?php echo $_GET['velg'] ?>"></div>
            <div class="velg velg-front contentVelg" style="background-color: #<?php echo $_GET['velg'] ?>"></div>
            <img src="image/<?php echo $_GET['image'] ?> " class="img-fluid img" id="image" style="position: relative;" oncontextmenu="return false;">
        </div>

        <div class="col-sm-12 col-md-6 custom-box" style="padding: 10px;">
            <div class="ornament1"></div>
            <div class="ornament2"></div>
            
            <label>Here is The Color</label>
            <div class="input-group">
                <span class="input-group-text inputColor" id="textLabel">Body Color</span>
                <input type="text" id="colorCode" aria-label="Color Code" class="form-control inputColor"
                        style="text-align: center; padding: 10px; color: #<?php echo $_GET['body'] ?>" value="#<?php echo $_GET['body'] ?>" readonly>
            </div>

            <div class="input-group">
                <span class="input-group-text inputColor" id="textLabelVelg">Velg Color</span>
                <input type="text" id="colorCodeVelg" aria-label="Color Code" class="form-control inputColor"
                    style="text-align: center; padding: 10px; color: #<?php echo $_GET['velg'] ?>" value="#<?php echo $_GET['velg'] ?>" readonly>
            </div>
        </div>
    </div>
</div>