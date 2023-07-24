const header = () => document.querySelector("header").innerHTML += `
<div class="container_header_up">
    <h1>Donato Robledo</h1>
    <img class="logo" src="./imagenes/Logo.jpg" alt="">
    </div>
    <div class="container_header">
    <div class="menu">
        <input type="checkbox" id="check_menu">
        <label id="label_check" for="check_menu">
            <i class="fa-solid fa-bars icon_burger"></i>
        </label>
        <nav>
            <ul>
                <li><a href="home">HOME</a></li>
                <li><a href="#">ABOUT ME</a></li>
                <li><a href="#">KNOWLEDGE</a></li>
                <li><a href="#">PROJECTS</a>
                    <ul class="submenu">
                        <li><a href="#">Mini Donny</a></li>
                        <li><a href="#">Data Base</a></li>
                        <li><a href="#">Little Button</a></li>
                        <li><a href="#">My Portfolio</a></li>
                        <li><a href="#">Shop Skateboards</a></li>
                        <li><a href="#">Animations</a></li>
                        <li><a href="#">Header and Footer</a></li>
                        <li><a href="#">Cirriculum Vitae Venom</a></li>
                    </ul>
                </li>
            </ul>
        <nav>
    </div>
    </div>
`
header()
