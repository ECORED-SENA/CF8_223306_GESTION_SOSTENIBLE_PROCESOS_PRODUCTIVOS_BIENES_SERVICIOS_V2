<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.bg1.align-items-center.py-0
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center    
          .col-lg-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/2.svg')
          .col-lg-9.mt-5
            p(data-aos="fade-down") Las Herramientas estadísticas son técnicas que ayudan a definir, analizar, medir y proponer soluciones a problemas o fallos que interfieren con el correcto funcionamiento de los procesos productivos. Por lo tanto, permiten un mayor control de las mejoras o procesos en la toma de decisiones.

            p(data-aos="fade-down").mb-0 La industria colombiana ha introducido de manera progresiva la filosofía acompañada de análisis estadísticos y procesos altamente estandarizados. Veamos con más profundidad en el siguiente video.  

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/49eRkDi1DiY?si=9JkmgY43IDxEOlvX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Análisis estadístico y propuesta de mejora
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
