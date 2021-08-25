<!-- HTML stuff -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Style sheet -->
    <link rel="stylesheet" href="styles.css">

    <title>Scream Into The Void</title>
</head>
<body>
    <section class="hero">
        <div class="hero-text">
            <h1>Scream Into The Void!</h1>
            <h2><i>(you know you want to)</i></h2>
            <div class="content">        
                <form id="new-post-form">
                    <div id="text">           
                        <input id="title" type="text" placeholder="Title"/><br>
                        
                        <input id="author_name" type="text" placeholder="Your name" /><br>
        
                        <input id="story" type="text" placeholder="Your story" />
                    </div>

                    <input id="publish" type="submit" value="Publish">

                </form>
            </div>
        </div>
    </section>

    <main>

    </main>

</body>
</html>

<!-- CSS stuff -->
div #text {
    display: flex;
    flex-direction: column;
    align-items: left;
}

#title {
    font-weight: 10;
    font-style: normal;
    font-size: 20px;
    line-height: 20px;
}

#author_name {
    font-family: 'Lucida Grande' ,Arial, sans-serif;
    font-size: 15px;
    line-height: 18px;
    color: #79828B;
    font-style: normal;
}

#story {
    font-family: 'Lucida Grande','Times New Roman',serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    line-height: 1.58;
    padding: 0;
    color: rgba(0,0,0,.8);
}

#publish {
    font-family: 'CustomSansSerif', 'Lucida Grande', Arial, sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 17px;
    color: rgb(255, 255, 255);
    text-decoration: none;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 20px;
    text-transform: uppercase;
    padding: 4px 12px;
    margin: 0 0 15px;
    background-color: rgb(0, 0, 0);
    cursor: pointer;
}

form {
    display: flex;
    justify-content: center;
    align-items: center;
}

input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  textarea {
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    resize: none;
  }
  
  input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
   div.content {
    border-radius: 5px;
    background-color: #242424;
    opacity: 0.7;
    padding: 20px;
  }
