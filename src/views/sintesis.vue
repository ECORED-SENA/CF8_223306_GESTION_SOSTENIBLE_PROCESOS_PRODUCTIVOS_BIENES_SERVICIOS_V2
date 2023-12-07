<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta el diagrama que representa el resumen de las temáticas que están desarrolladas en el componente formativo: 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La imagen muestra un mapa conceptual relacionado con el análisis estadístico y la mejora de procesos. En él se mencionan herramientas que facilitan el análisis de problemas, como el diagrama causa-efecto y el diagrama de dispersión, y se hace referencia a normas para el muestreo de variables y atributos, como la Norma 2859 y la Norma Militar Estándar. Además, incluye prácticas de Lean Manufacturing, como Kanban y el sistema Pull, y estrategias de gestión de calidad y eficiencia como 5s y TPM (Mantenimiento Total Productivo). El diagrama vincula estos elementos como partes de un sistema integrado para mejorar la calidad y eficiencia en la producción.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
