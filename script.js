const header = () => document.querySelector("header").innerHTML += `
 <div class="container_header_up">
                <h1>Donato Robledo</h1>
                <img class="logo" src="./imagenes/logo.jpg" alt="logo">
                </div>
                <div class="container_header">
                <div class="menu">
                    <input type="checkbox" id="check_menu">
                    <label id="label_check" for="check_menu">
                        <i class="fa-solid fa-bars icon_burger"></i>
                    </label>
                    <nav>
                        <ul>
                            <li><a href="#home">HOME</a></li>
                            <li><a href="#knowledge">KNOWLEDGE</a></li>
                            <li><a href="#projects">PROJECTS</a>
                                <ul class="submenu">
                                    <li><a href="#minidonny">MiniDonny</a></li>
                                    <li><a href="#my-portfolio">My-Portfolio</a></li>
                                    <li><a href="#data-base">Data-Base</a></li>
                                    <li><a href="#git-with-github">Git-With-Github</a></li>
                                    <li><a href="#curriculum-vitae-venom">Cirriculum-Vitae-Venom</a></li>
                                    <li><a href="#shop-skateboards">Shop-Skateboards</a></li>
                                </ul>
                            </li>
                        </ul>
                    <nav>
                </div>
                </div>
`
header()
window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0); 
})