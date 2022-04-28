// window.onload = function(){
//     var barraCarga = document.getElementById('barra-carga');
    
//     barraCarga.style.visibility = 'hidden';
//     barraCarga.style.display = 'none';
// }
$('document').ready(function(){
    //ANIMACIÓN DE "REVELACIÓN" DE TEXTO.

    /* Guardo en la variable "profesion" la etiqueta que contiene el texto 
    al cual quiero aplicar el efecto de revelado.*/
    const profesion = baffle(".profesion");

    /* Le asigno a la variable profesión (que contiene el texto que quiero animar) los caracteres a utilizar para 
    la animación del texto revelado (puedes utilizar cualquier tipo de carácteres). También asigno la velocidad que tendrá el efecto de las letras*/
    profesion.set({
        characters: '█▓▓ ░░>██ ▓█▓>▓ ▓<█ ░<▒░▓ █░<█ █▒> ▓░▓< ▒▓░░',
        speed: 90
    });

    // Ejecuto el inicio de la animacion.
    profesion.start();
    // Establezco la duración que tendrá la animación antes de revelar el texto.
    profesion.reveal(3000);

    var boton = document.getElementById('boton');
        
    $('#tagline').t({
        beep:false,
        caret:'<span style="color:hotpink;">•</span>',
        typing:function(elm,chr){
        if(chr.match(/\-trigger/))
            $('#pow-txt').show().delay(500).fadeOut(0);
        }
    });

    $('#boton-arriba').click(function(){
        $('body, html').animate({
          scrollTop: '0px'
        }, 300);
      });
   
    $(window).scroll(function(){
      if( $(this).scrollTop() > 0 ){
        $('#boton-arriba').slideDown(300);
      } else {
        $('#boton-arriba').slideUp(300);
      }
    });
   
// habilidades
function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;

        case 39: // right
        moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').click(function() {
  moveToSelected($(this));
});

$('#prev').click(function() {
  moveToSelected('prev');
});

$('#next').click(function() {
  moveToSelected('next');
});

/* fondo prueba 1 */
// function Canva() {
//   var canvas = document.getElementById( 'c' ),
//   ctx = canvas.getContext( '2d' ),
//   fl = 300,
//   count = 200,
//   points = [],
//   startSpeed = 0,
//   tick = 0,
//   width,
//   height,
//   bounds,
//   vp,
//   mouse,
//   canvasOffset;

//     function rand( min, max ) {
//       return Math.random() * ( max - min ) + min;
//     }

//     function norm( val, min, max ) {
//       return ( val - min ) / ( max - min );
//     }

//     function resetPoint( p, init ) {
//       p.z = init ? rand( 0, bounds.z.max ) : bounds.z.max;
//       p.x = rand( bounds.x.min, bounds.x.max ) / ( fl / ( fl + p.z ) );
//       p.y = rand( bounds.y.min, bounds.y.max ) / ( fl / ( fl + p.z ) );
//       p.ox = p.x;
//       p.oy = p.y;
//       p.oz = p.z;
//       p.vx = 0;
//       p.vy = 0;
//       p.vz = rand( -1, -10 ) + startSpeed;
//       p.ax = 0;
//       p.ay = 0;
//       p.az = 0;
//       p.s = 0;
//       p.sx = 0;
//       p.sy = 0;
//       p.os = p.s;
//       p.osx = p.sx;
//       p.osy = p.sy;
//       p.hue = rand( 120, 200 );
//       p.lightness = rand( 70, 100 );
//       p.alpha = 0;
//       return p;
//     }

//     function create() {
//       vp = {
//         x: width / 2,
//         y: height / 2
//       };
//       mouse = {
//         x: vp.x,
//         y: vp.y,
//         down: false
//       };
//       bounds = {
//           x: { min: -vp.x, max: width - vp.x },
//           y: { min: -vp.y, max: height - vp.y },
//           z: { min: -fl, max: 1000 }
//       };
//     }

//     function update() {
//       if( mouse.down ) {
//         if( startSpeed > -30 ) {
//           startSpeed -= 0.1;
//         } else {
//           startSpeed = -30;
//         }
//       } else {
//         if( startSpeed < 0 ) {
//           startSpeed += 1;
//         } else {
//           startSpeed = 0;
//         }
//       }
      
//       vp.x += ( ( width / 2 - ( mouse.x - width / 2 ) ) - vp.x ) * 0.025;
//       vp.y += ( ( height / 2 - ( mouse.y - height / 2 ) ) - vp.y ) * 0.025;
//       bounds = {
//           x: { min: -vp.x, max: width - vp.x },
//           y: { min: -vp.y, max: height - vp.y },
//           z: { min: -fl, max: 1000 }
//       };  
      
//       if( points.length < count ) {
//         points.push( resetPoint( {} ) );
//       }
//       var i = points.length;
//       while( i-- ) {
//         var p = points[ i ];
//         p.vx += p.ax;
//         p.vy += p.ay;
//         p.vz += p.az;
//         p.x += p.vx;
//         p.y += p.vy;
//         p.z += p.vz;
//         if( mouse.down ) {
//           p.az = -0.5;
//         }
//         if( 
//           p.sx - p.sr > bounds.x.max ||
//           p.sy - p.sr > bounds.y.max ||
//           p.z > bounds.z.max ||
//           p.sx + p.sr < bounds.x.min ||
//           p.sy + p.sr < bounds.y.min ||
//           p.z < bounds.z.min
//         ) {
//           resetPoint( p );
//         }
//         p.ox = p.x;
//         p.oy = p.y;
//         p.oz = p.z;
//         p.os = p.s;
//         p.osx = p.sx;
//         p.osy = p.sy;
//       }
//     }

//     function render() {
//       ctx.save();
//       ctx.translate( vp.x, vp.y );
//       ctx.clearRect( -vp.x, -vp.y, width, height );
//       var i = points.length;
//       while( i-- ) {
//         var p = points[ i ];    
//         p.s = fl / ( fl + p.z );
//         p.sx = p.x * p.s;
//         p.sy = p.y * p.s;
//         p.alpha = ( bounds.z.max - p.z ) / ( bounds.z.max / 2 );
//         ctx.beginPath();
//         ctx.moveTo( p.sx, p.sy );
//         ctx.lineTo( p.osx, p.osy );
//         ctx.lineWidth = 2;
//         ctx.strokeStyle = 'hsla(' + p.hue + ', 100%, ' + p.lightness + '%, ' + p.alpha + ')';
//         ctx.stroke();
//       }
//       ctx.restore();
//     }

//     function resize() {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//       canvasOffset = { x: canvas.offsetLeft, y: canvas.offsetTop };
//     }


//     function loop() {
//       requestAnimationFrame( loop );
//       update();
//       render();
//       tick++;
//     }

//     window.addEventListener( 'resize', resize );
//     document.body.appendChild( canvas );
//     resize();
//     create();
//     loop();
// };
// Canva();


});