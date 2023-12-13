<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Alternativas de mejoramiento

    .row.justify-content-center.align-items-center.bg18.pb-0.mb-5    
      .col-lg-8(data-aos="fade-down")
        p.mb-0.j.px-5 Dentro de las alternativas de mejoramiento se tiene en cuenta que se debe realizar el muestreo del proceso, para determinar qué opciones de mejora se pueden proponer.  
      .col-lg-4.py-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/61.png')         

    .row.justify-content-start.mb-3   
      .col-auto(data-aos="flip-down")
        .bg2.p-3
          h4.mb-0 Muestreo

    p(data-aos="fade-down").mb-4 El muestreo de aceptación es el proceso a través del cual se analiza una muestra para admitir o descartar una población. Lo utilizan en los controles de calidad de aquellos productos que resulta muy costoso e incluso imposible de analizar al 100% de la población, veamos el video: 
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/q0KKRXraNwg?si=JpFBCdp1eFYTsvQT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  
        figcaption Video. Concepto control de calidad 
    h4.text-center.my-4(data-aos="fade-down") Planes y su clasificación:
    .row.justify-content-center.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/62.svg' alt='AvatarTop')
          .tarjeta.color-primario.bgp
            .p-4
              .row.justify-content-center.my-4
                .col-auto 
                  .bgw.p-1.px-2.brad
                    h4.mb-0.text-center Simples
              p Se tomará una sola muestra para decidir la aceptación o rechazo según la cantidad de defectos detectados.

      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/63.svg' alt='AvatarTop')
          .tarjeta.color-primario.bgy
            .p-4
              .row.justify-content-center.my-4
                .col-auto 
                  .bgw.p-1.px-2.brad
                    h4.mb-0.text-center Doble
              p Si hay dudas en la evaluación de calidad, se pueden tomar hasta dos muestras, basándose en los lotes.

      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/64.svg' alt='AvatarTop')
          .tarjeta.color-primario.bgp
            .p-4
              .row.justify-content-center.my-4
                .col-auto 
                  .bgw.p-1.px-2.brad
                    h4.mb-0.text-center Múltiple
              p En casos donde persisten inquietudes durante la evaluación, puede ser necesario tomar más de dos muestras.  

    .row.justify-content-center.align-items-center        
      .col-lg-4.d-none.d-lg-block  
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/65.png')         

      .col-lg-8
        h4(data-aos="fade-down") Muestreo para inspección por atributos: 
        p(data-aos="fade-down") Dentro de las normas hay planes de acuerdo a la rigurosidad que puede ser severa, normal, o reducida y depende del cumplimiento y comportamiento del proveedor. 
        .row.justify-content-center.align-items-center.bg19.pb-0 
          .col-lg-12(data-aos="fade-down")
            p.mb-0 Dentro de la norma se especifica que cuando se comienza la revisión deberá ser a través de una rigurosidad normal, si el proveedor demuestra tener un buen cumplimiento se podrá pasar a una rigurosidad reducida, si por el contrario demuestra un débil cumplimiento, se deberá realizar una rigurosidad severa. Dependiendo los casos, por ejemplo, si es reducida o severa se verá en la cantidad de defectos máximos, con el cual se aprobaría o rechazaría el lote.

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1  Modelos de gestión  

    p(data-aos="fade-down") Los modelos de gestión están diseñados para fortalecer el proceso productivo, con el objetivo de optimizar la competitividad en el mercado actual y, al mismo tiempo, explorar la incursión en nuevos mercados 
    h4(data-aos="fade-down").mb-4 Los siguientes modelos planteados, son:
    
    .tarjeta.bg4.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-4
            h4 El #[i Lean Manufacturing o Lean Production]  
            p Es una metodología de gestión de trabajo enfocado en mejorar la comunicación y el trabajo en equipo, para poder entregar a los clientes un producto o servicio de valor. El principio central del #[i Lean Manufacturing] es la reducción y eliminación del desperdicio. 
                  
          .col-lg-7
            img.img-t.img-a(src='@/assets/curso/temas/67.png') 
        .row.justify-content-center
          .col-lg-4
            h4 Henry Ford 
            p En el desarrollo de un modelo de vehículo tipo A, los sistemas de producción de la época alcanzaron una capacidad de 1700 unidades. Posteriormente, en 1908, con la construcción de otro modelo y la mejora del sistema, la producción aumentó significativamente a 10,600 unidades. El avance más notable se produjo en 1913 con la introducción de una innovadora línea de montaje, lo cual, para 1923, permitió elevar la producción anual a 2.1 millones de vehículos. Henry Ford ideó un sistema en el que cada estación de trabajo estaba operada por un trabajador especializado, lo que reducía significativamente el tiempo de ensamblaje de cada vehículo. Este enfoque revolucionó la industria automotriz y estableció nuevos estándares de producción masiva. 
                     
          .col-lg-7
            img.img-t.img-a(src='@/assets/curso/temas/68.png') 
        .row.justify-content-center
          .col-lg-4
            h4.fst-italic Sakichi Toy  
            p Diseña un telar tipo G, automático y con parada en caso de fallos, luego de esto, funda la empresa Toyota y diseña su primer modelo, para este entonces la empresa tendría tres principios: 
            ol.lista-ol--cuadro.fa-ul
              li 
                .lista-ol--cuadro__vineta.c4
                  span 1
                | Detener las operaciones cuando exista algo fuera de lo normal.

              li 
                .lista-ol--cuadro__vineta.c4
                  span 2
                | Nunca fabricar productos con defectos.

              li 
                .lista-ol--cuadro__vineta.c4
                  span 3
                | Las personas no tienen que vigilar todo el tiempo la máquina.                                                      
            p Para 1933 se funda la empresa Toyota y ya para 1951 se comienza a desarrollar lo que se conoce como TPS (Sistema de producción Toyota), 

            h5 El “Justo a Tiempo”, la automatización con un toque humano, la eliminación de desperdicios y la estandarización de los procesos.                 
          .col-lg-7
            img.img-t.img-a(src='@/assets/curso/temas/69.png') 
        .row.justify-content-center
          .col-lg-4
            h4.fst-italic Lean Manufacturing  
            p La filosofía de él nace de la industria automovilística japonesa, principalmente de la empresa #[i Toyota], luego de reconstruir la economía después de la segunda guerra mundial, reaccionando a la competencia estadounidense de esta época #[i ord, General Motors y Chrysler], declarando que deberían trabajar más inteligentemente. 

            p El sistema Lean se fundamenta en la #[b reducción de inventarios y defectos en las plantas de Toyota y también en sus proveedores, además de la mejora continua y el valor del compromiso de sus empleados para lograr las metas establecidas. ]                  
          .col-lg-7
            img.img-t.img-a(src='@/assets/curso/temas/70.png')  
        .row.justify-content-center
          .col-lg-4
            h4.fst-italic Pull System 
            p El sistema de jalar consiste principalmente en producir exactamente lo que el cliente necesita, en este caso la información de las necesidades de producción se genera desde la parte comercial hasta la planta de producción, ya que el ritmo de compra determina el ritmo de producción. 

            h5 Consecuencia directa: 
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.c1
                | Reducción de inventario.
              li 
                i.fas.fa-check-circle.c1
                | Reducción de materia prima.
              li 
                i.fas.fa-check-circle.c1
                | Reducción de producto en proceso.
              li 
                i.fas.fa-check-circle.c1
                | Reducción de producto terminado. 
              li 
                i.fas.fa-check-circle.c1
                | Reducción de tiempos improductivos. 
                    
          .col-lg-7
            img.img-t.img-a(src='@/assets/curso/temas/71.png') 
        .row.justify-content-center
          .col-lg-4
            h4.fst-italic Sistema Kanban - Lean Manufacturing  
            p Es reconocido como un sistema visual de comunicaciones entre procesos a través de tarjetas, en donde cada proceso avisa la cantidad de material o producto que necesita para realizar las actividades de acuerdo a la demanda de cada uno al proceso siguiente. 

            h5 tarjetas :
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.c1
                | Cantidades requeridas, 
              li 
                i.fas.fa-check-circle.c1
                | En qué tiempo debe entregarse, y a quién                     
          .col-lg-7
            img.img-t.img-a(src='@/assets/curso/temas/72.png')  
        .row.justify-content-center
          .col-lg-4
            h4.fst-italic Lean es JIT o Justo a Tiempo 
            p Este sistema permite entregar al cliente con la calidad, cantidad y tiempo solicitado, en este caso se enfoca en eliminar las actividades que no agregan valor, para lo cual debe capacitar a las personas, determinar el flujo del proceso de manera meticulosa, minimizar daños en maquinaria, emplear técnicas como SMED (#[i Single Minute Exchange Dye]) lo cual significa cambio de matriz en menos de 10 minutos.                   
          .col-lg-7
            img.img-t.img-a(src='@/assets/curso/temas/73.png')

    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido.mb-md-5.mb-lg-0(data-aos="zoom-in-left")
      h2 2.2  Herramientas de mejora 
    .row.justify-content-center.align-items-center.bg20.pb-0.mb-5  
      .col-lg-8(data-aos="fade-down")
        .j.px-5
          p La implantación de las herramientas de mejoramiento se deben adaptar a las necesidades de las organizaciones, con el fin de estandarizar procesos, facilitar la detección de errores y conservar el funcionamiento óptimo de la maquinaria.

          p.mb-0 La implantación de las herramientas de mejoramiento se El éxito en la implantación de las herramientas de mejoramiento, dependen del compromiso, constancia y disciplina del personal de todos los niveles, es así como se tienen ejemplos de crecimiento, en empresas de todos los sectores. El objetivo es aprender a utilizar las herramientas y adaptarlas a las necesidades de una organización.
      .col-lg-4.py-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/75.png')  

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg21")
      .row.justify-content-center(titulo="Herramienta de las 5´s: Proceso Lean Manufacturing")
        .col-lg-8.mb-4.mb-md-0
          p Tiene cinco pasos así: 
          ul.lista-ul.fa-ul
            li 
              i.fas.fa-check-circle.c1
              span #[b #[i Seiri:]] Clasificar lo que realmente es necesario en el proceso y lo que no.
            li 
              i.fas.fa-check-circle.c1
              span #[b #[i Seiton:]] Ordenar y tomar con respeto a lo que no es necesario en el proceso.
            li 
              i.fas.fa-check-circle.c1
              span #[b #[i Seiso:]] Limpiar y mantenerlo.
            li 
              i.fas.fa-check-circle.c1
              span #[b #[i Seiketsu:]] Estandarizar los procesos de higiene y orden.
            li 
              i.fas.fa-check-circle.c1
              span #[b #[i Sheitzuke:]] Seguir mejorando con disciplina.              
          p El método de las 5S es una herramienta de calidad, basada en cinco principios simples, referida al “Mantenimiento Integral” de la organización, no solamente de equipos, instrumental e infraestructura sino del cuidado del entorno de trabajo por parte de todos.                     
        .col-lg-4        
          img.img-t.img-a(src='@/assets/curso/temas/76.png')  
      .row.justify-content-center(titulo="Herramienta Poka Yoke")
        .col-lg-8.mb-4.mb-md-0
          p Esta herramienta facilita la detección de errores a cometer, como, por ejemplo, los aparatos electrónicos que tienen dispositivos de conexión para la carga, que solo pueden ser conectados de cierta manera, de lo contrario no podría cargarse. 

          p En producción suelen existir muchas prácticas Pokayoke o la prueba de errores, como plantillas, marcaciones, indicaciones por colores, que permiten identificar si se está cometiendo un error durante la tarea, perfeccionando y estandarizando más el proceso.       
        .col-lg-4        
          img.img-t.img-a(src='@/assets/curso/temas/77.png') 
      .row.justify-content-center(titulo="Herramienta Mantenimiento total Productivo")
        .col-lg-8.mb-4.mb-md-0
          p El TPM que traduce Total #[i Productive Maintenance]

          p El enfoque está dirigido a conservar el funcionamiento óptimo de la maquinaria, con cero daños, cero defectos y cero accidentes, se basa en 8 pilares con una base fundamental que es la aplicación de la herramienta 5´s.    
        .col-lg-4        
          img.img-t.img-a(src='@/assets/curso/temas/78.png') 
      .row.justify-content-center(titulo="Pilares")
        .col-lg-8.mb-4.mb-md-0
          ul.lista-ul.fa-ul
            li 
              i.fas.fa-check-circle.c1
              | Lograr mejoras a través del análisis profundo de sus problemas y sus causas, así establecer metas concretas en el proceso que tengan que ver con la maquinaria.     
            li 
              i.fas.fa-check-circle.c1
              | Mantenimiento autónomo, se refiere a que cada operador debe conocer el mantenimiento básico diario de su máquina y equipo, con el objetivo de que el operario conozca el funcionamiento de la máquina y previniendo daños en las mismas. 
            li 
              i.fas.fa-check-circle.c1
              | Mantenimiento de la calidad, en este caso se busca a través de herramientas estadísticas controlar la variabilidad causada por temas de maquinaria.      
            li 
              i.fas.fa-check-circle.c1
              | Control inicial que se realiza a la maquinaria que ingresa nueva al proceso, para esto se debe buscar tecnología más sencilla de usar.     
            li 
              i.fas.fa-check-circle.c1
              | ATPM consiste en implementar las mismas herramientas en los equipos y elementos de la oficina para que exista coherencia y compromiso en el proceso.     
            li 
              i.fas.fa-check-circle.c1
              | Seguridad, salud y medio ambiente que regularmente plantea políticas enmarcadas a garantizar el mejoramiento de estos tres aspectos.                                                   
        .col-lg-4        
          img.img-t.img-a(src='@/assets/curso/temas/79.png') 

    Separador 
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.3  Costos de no calidad 
    .row.bg1.align-items-center.py-0.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center 
          .col-lg-9.mt-5
            p(data-aos="fade-down").j La no calidad se define como la incidencia de desperdicios, reprocesos y la pérdida de tiempo y materiales. Los costos resultantes son una consecuencia directa y suelen manifestarse inicialmente en la pérdida de clientes y en el pago de garantías debido al incumplimiento de los estándares de calidad y tiempo.           
          .col-lg-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/80.svg')
                                        
    .row.justify-content-center.align-items-center.mb-5           
      .col-auto
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/icon.svg')

      .col
        p(data-aos="fade-down").mb-0 En el siguiente video se presenta el concepto de calidad. Se abordarán los objetivos y necesidades esenciales en la inspección de productos, destacando la importancia del control estadístico de calidad.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/X_nTf4EcD9Y?si=FWaaa9UNH6okX2xl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  
        figcaption Video. Técnicas de muestreo por aceptación  
    .row.justify-content-center.align-items-center.bg15.pb-0.mb-5
      .col-lg-1.py-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/81.svg')     
      .col-lg-11(data-aos="fade-down")
        p La calidad es un aspecto verificable en cualquier parte del proceso desde la compra de la materia prima hasta la entrega al cliente, e incluso después en los procesos de postventa. Para esto es necesario que la empresa incurra en costos de calidad, como inspecciones, evaluaciones, consultorías que si bien es una actividad que no agrega valor, puede ser menos costosa que la no calidad. 

    p(data-aos="fade-down").mb-5 Estos costos se clasifican en:           

    .row.justify-content-center.mb-4                 
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 15.
          span Clasificación de los costos de calidad

        .tabla-a.mb-4
          table
            thead.bgt3
              tr.text-center.c2
                th Costos de la calidad 
                th Costos de la no calidad
            tbody
              tr
                td #[b De prevención Prevenir errores y fallas] 
                  ul.lista-ul.fa-ul.mt-3
                    li 
                      i.fas.fa-check-circle.c1
                      | Planeación de calidad y procesos
                    li 
                      i.fas.fa-check-circle.c1
                      | Control de Procesos
                    li 
                      i.fas.fa-check-circle.c1
                      | Entrenamiento y capacitación                   

                td #[b Fallas Internas Originados por fallas, defectos, incumplimiento] 
                  ul.lista-ul.fa-ul.mt-3
                    li 
                      i.fas.fa-check-circle.c1
                      | Desperdicio de tiempo y materia prima por reprocesos
                    li 
                      i.fas.fa-check-circle.c1
                      | Re inspecciones
                    li 
                      i.fas.fa-check-circle.c1
                      | Reparaciones                    
        
              tr
                td #[b Evaluación Medir y evaluar la calidad]  
                  ul.lista-ul.fa-ul.mt-3
                    li 
                      i.fas.fa-check-circle.c1
                      | Inspección, pruebas y ensayos
                    li 
                      i.fas.fa-check-circle.c1
                      | Auditorias de calidad
                    li 
                      i.fas.fa-check-circle.c1
                      | Equipos de pruebas de ensayos                   

                td #[b Fallas externas Generadas por incumplimientos] 
                  ul.lista-ul.fa-ul.mt-3
                    li 
                      i.fas.fa-check-circle.c1
                      | Atención de quejas del cliente
                    li 
                      i.fas.fa-check-circle.c1
                      | Servicios de garantía
                    li 
                      i.fas.fa-check-circle.c1
                      | Devoluciones
                    li 
                      i.fas.fa-check-circle.c1
                      | Costos de Imagen
                    li 
                      i.fas.fa-check-circle.c1
                      | Pérdidas en ventas
                    li 
                      i.fas.fa-check-circle.c1
                      | Castigos
                    li 
                      i.fas.fa-check-circle.c1
                      | Penalizaciones
                    li 
                      i.fas.fa-check-circle.c1
                      | Juicios
                    li 
                      i.fas.fa-check-circle.c1
                      | Demandas
                    li 
                      i.fas.fa-check-circle.c1
                      | Seguros de incumplimiento                   
                                
    .row.justify-content-center            
      .col-lg-10
        .bg23.p-3
          p(data-aos="fade-down").mb-0 Sin programas de calidad la empresa incurrirá en los costos de todas las clasificaciones, sin embargo, con planes y programas de calidad, es posible que esos costos se reduzcan, permitiendo justificar la inversión en estos programas y el esfuerzo en mantenerlos. 
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
