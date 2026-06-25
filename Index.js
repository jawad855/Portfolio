<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Jawad Benabbes | Portfolio</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

<style>
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Inter',sans-serif;
}

body{
background:#0f172a;
color:white;
overflow-x:hidden;
}

html{
scroll-behavior:smooth;
}

nav{
position:fixed;
top:0;
width:100%;
background:rgba(15,23,42,.9);
backdrop-filter:blur(10px);
padding:20px 8%;
display:flex;
justify-content:space-between;
align-items:center;
z-index:1000;
}

.logo{
font-size:1.3rem;
font-weight:800;
}

nav ul{
display:flex;
gap:25px;
list-style:none;
}

nav a{
color:white;
text-decoration:none;
transition:.3s;
}

nav a:hover{
color:#38bdf8;
}

.hero{
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
padding:0 20px;
}

.hero-content h1{
font-size:4rem;
font-weight:900;
margin-bottom:10px;
}

.hero-content p{
font-size:1.2rem;
color:#cbd5e1;
margin-bottom:25px;
}

.btn{
display:inline-block;
padding:14px 28px;
background:#38bdf8;
color:white;
text-decoration:none;
border-radius:10px;
font-weight:600;
transition:.3s;
}

.btn:hover{
transform:translateY(-3px);
}

section{
padding:100px 8%;
}

.section-title{
font-size:2.5rem;
margin-bottom:40px;
text-align:center;
}

.about{
max-width:900px;
margin:auto;
text-align:center;
line-height:1.8;
color:#cbd5e1;
}

.skills{
display:flex;
flex-wrap:wrap;
justify-content:center;
gap:15px;
margin-top:30px;
}

.skill{
padding:12px 18px;
background:#1e293b;
border-radius:999px;
}

.portfolio-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:25px;
}

.card{
background:#1e293b;
border-radius:18px;
overflow:hidden;
transition:.4s;
}

.card:hover{
transform:translateY(-8px);
}

.card img{
width:100%;
aspect-ratio:1/1;
object-fit:cover;
display:block;
}

.card-content{
padding:18px;
}

.card-content h3{
margin-bottom:8px;
}

.card-content p{
color:#94a3b8;
font-size:.95rem;
}

.contact{
text-align:center;
}

.contact a{
color:#38bdf8;
text-decoration:none;
font-size:1.1rem;
}

footer{
text-align:center;
padding:30px;
color:#94a3b8;
border-top:1px solid #1e293b;
}

.reveal{
opacity:0;
transform:translateY(40px);
transition:1s;
}

.reveal.active{
opacity:1;
transform:translateY(0);
}

@media(max-width:768px){

.hero-content h1{
font-size:2.6rem;
}

nav ul{
display:none;
}

}
</style>
</head>

<body>

<nav>
<div class="logo">Jawad Benabbes</div>

<ul>
<li><a href="#about">About</a></li>
<li><a href="#skills">Skills</a></li>
<li><a href="#portfolio">Portfolio</a></li>
<li><a href="#contact">Contact</a></li>
</ul>
</nav>

<section class="hero">
<div class="hero-content">
<h1>Jawad Benabbes</h1>
<p>Graphic Designer & Video Editor</p>
<a href="#portfolio" class="btn">View My Work</a>
</div>
</section>

<section id="about" class="reveal">
<h2 class="section-title">About Me</h2>

<div class="about">
I am a passionate Graphic Designer and Video Editor focused on creating modern visual experiences, social media content, branding concepts, and creative digital designs. My goal is to deliver impactful and professional work that helps brands stand out.
</div>
</section>

<section id="skills" class="reveal">
<h2 class="section-title">Skills</h2>

<div class="skills">
<div class="skill">Graphic Design</div>
<div class="skill">Video Editing</div>
<div class="skill">Brand Identity</div>
<div class="skill">Social Media Design</div>
<div class="skill">Canva Templates</div>
<div class="skill">Adobe Photoshop</div>
<div class="skill">Adobe Illustrator</div>
<div class="skill">Content Creation</div>
</div>
</section>

<section id="portfolio" class="reveal">
<h2 class="section-title">Portfolio</h2>

<div class="portfolio-grid">

<div class="card">
<img src="1.jpeg">
<div class="card-content">
<h3>Brand Identity</h3>
<p>Modern branding concept.</p>
</div>
</div>

<div class="card">
<img src="2.jpeg">
<div class="card-content">
<h3>Social Media Campaign</h3>
<p>Creative marketing design.</p>
</div>
</div>

<div class="card">
<img src="3.jpeg">
<div class="card-content">
<h3>YouTube Thumbnail</h3>
<p>High-converting thumbnail design.</p>
</div>
</div>

<div class="card">
<img src="4.jpeg">
<div class="card-content">
<h3>Event Poster</h3>
<p>Professional event promotion.</p>
</div>
</div>

<div class="card">
<img src="5.jpeg">
<div class="card-content">
<h3>Arabic Restaurant Poster</h3>
<p>Arabic typography project.</p>
</div>
</div>

<div class="card">
<img src="6.jpeg">
<div class="card-content">
<h3>Arabic Real Estate Poster</h3>
<p>Luxury Arabic advertising.</p>
</div>
</div>

<div class="card">
<img src="7.jpeg">
<div class="card-content">
<h3>Fashion Campaign</h3>
<p>Premium fashion branding.</p>
</div>
</div>

<div class="card">
<img src="8.jpeg">
<div class="card-content">
<h3>Tech Advertisement</h3>
<p>Modern technology design.</p>
</div>
</div>

<div class="card">
<img src="9.jpeg">
<div class="card-content">
<h3>Arabic Business Poster</h3>
<p>Corporate Arabic campaign.</p>
</div>
</div>

</div>
</section>

<section id="contact" class="contact reveal">
<h2 class="section-title">Contact</h2>

<p>Email:</p>
<br>

<a href="mailto:jawadbenabbess@gmail.com">
jawadbenabbess@gmail.com
</a>

</section>

<footer>
© 2026 Jawad Benabbes. All Rights Reserved.
</footer>

<script>
const reveals=document.querySelectorAll('.reveal');

window.addEventListener('scroll',()=>{

reveals.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<window.innerHeight-100){
el.classList.add('active');
}

});

});
</script>

</body>
</html>
