<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Comportamiento estadístico
      
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La importancia del concepto de estadística trasciende a muchos campos de aplicación, en la gestión de los procesos es necesario para administrar correctamente la información, analizar y tomar decisiones importantes sobre el producto y proceso. El análisis estadístico facilita las propuestas o proyectos que conllevan a la mejora continua, estableciendo a través de la recolección de datos y evidencia la causa raíz del problema y el comportamiento del proceso, por tanto, los modelos de mejoramiento requieren que se apoyen en un correcto análisis de la información, verificando que esta sea de calidad.  

    .row.justify-content-start.mb-3   
      .col-auto(data-aos="flip-down")
        .bg2.p-3
          h4.mb-0 Herramientas y teorías estadísticas  

    p(data-aos="fade-down").mb-5 Antes de querer obtener los datos de un problema se debe tener claro el objetivo que persigue el proyecto de mejora, así como también, el tiempo, y los recursos, de esta manera se va a tener claro qué tipo de información es necesaria recolectar.  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8     
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Proceso para la toma de decisiones

        img.img-t.img-a.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/3.svg',alt="La figura muestra un diagrama de flujo del proceso de toma de decisiones. Empieza con problema, sigue con objetivos, información que se requiere, obtención de información, análisis, conclusiones y terminando en toma de decisiones.")
        figcaption Nota. 
          a(href="https://cutt.ly/UCjAO72" target="_blank") https://cutt.ly/UCjAO72 

    .row.justify-content-center.align-items-center.bg3.pb-0.mb-4
      .col-lg-1.py-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/5.svg')     
      .col-lg-11(data-aos="fade-down")
        p.mb-0 En la figura anterior se representa el proceso para tomar decisiones y la función de la estadística en la gestión de los procesos, donde se busca facilitar las acciones y toma de decisiones en la obtención y análisis de la información, sin embargo, la estadística está presente en cada paso de este proceso, comenzando por la identificación del problema.      
 
    p(data-aos="fade-down").mb-5 Para tener un amplio conocimiento en cuanto a la teoría estadística, se podrían hablar de factores, los cuales a continuación exponemos:

    .tarjeta.bg4.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-4
            h4 Teorema de la adición
            p Como su nombre lo indica es la suma de las diferentes probabilidades, que dan como resultado la opción de que dichos eventos no suceden en un mismo momento.
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.c1
                span.text-bold Fórmula: P (A u B) = P(A) + P(B) – P (A n B)           
          .col-lg-7
            img.img-t.img-a(src='@/assets/curso/temas/6.png') 
        .row.justify-content-center
          .col-lg-4
            h4 Teorema de la multiplicación
            p El teorema busca demostrar que existe una probabilidad que dos o más eventos coincidan en tiempo o momento.
            h5 Fórmula: 
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.c1
                span.text-bold Eventos independientes: P (A y B) = P (A B) = P(A)P(B)  
              li 
                i.fas.fa-check-circle.c1
                span.text-bold Eventos dependientes: P (A y B) = P (A B) = P(A)P(B/A)                     
          .col-lg-7
            img.img-t.img-a(src='@/assets/curso/temas/7.png')   
        .row.justify-content-center
          .col-lg-4
            h4 Teorema de bayes
            p Este teorema se basa en conocer las probabilidades que pasan de acuerdo a los datos proporcionados de otros eventos, es decir esta se condiciona de otros eventos, para obtener su resultado final.
            h5 Fórmula: 
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.c1
                img.img-t(src='@/assets/curso/temas/13.svg') 

          .col-lg-7
            img.img-t.img-a(src='@/assets/curso/temas/8.png') 
        .row.justify-content-center
          .col-lg-4
            h4 Permutaciones
            p Estas sirven para ejercer el posible orden de diferentes elementos específicos de un grupo con características similares.
            h5 Fórmula: 
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.c1
                img.img-t(src='@/assets/curso/temas/14.svg')              
          .col-lg-7
            img.img-t.img-a(src='@/assets/curso/temas/9.png')       
        .row.justify-content-center
          .col-lg-4
            h4 Combinaciones
            p A diferencia de las permutaciones, las combinaciones buscan conocer el número de probabilidades posibles, de un determinado grupo, sin importar el orden específico. Para el desarrollo de esta es necesario realizar la siguiente fórmula: 
            h5 Fórmula: 
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.c1
                img.img-t(src='@/assets/curso/temas/15.svg')             
          .col-lg-7
            img.img-t.img-a(src='@/assets/curso/temas/10.png')   
        .row.justify-content-center
          .col-lg-4
            h4 Distribución continua (Normal)
            p Son aquellas que muestran valores de una variable sin ningún orden específico, es decir de forma aleatoria. 
          .col-lg-7
            img.img-t.img-a(src='@/assets/curso/temas/11.png') 
        .row.justify-content-center
          .col-lg-4
            h4 Distribuciones discretas (binomial y de poisson): 
            p Este tipo de distribución a diferencia de la distribución continua, presenta valores exactos que solo pueden ser tomados en un orden específico.  
          .col-lg-7
            img.img-t.img-a(src='@/assets/curso/temas/12.png')   
    

    .row.justify-content-start
      .col-auto(data-aos="flip-down")
        .bg2.p-3
          h4.mb-0 Variación

    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-8.my-3 
        p(data-aos="fade-down") Son cambios que se pueden generar en el proceso productivo por causa de diferentes aspectos y la interacción de estos, como la maquinaria, las materias primas, la mano de obra utilizada, las condiciones medio ambientales, el tipo de medición utilizada en el proceso, y por último el método de trabajo utilizado. 

        p(data-aos="fade-down") El uso de herramientas estadísticas es muy importante para el correcto seguimiento de las variaciones en el proceso y mejora de la calidad, identifica oportunidades de mejora y la frecuencia en la que se presentan durante el proceso, también son útiles para detectar las causas vitales y enfocarse en estas, finalmente para analizar las posibles soluciones basadas en la lógica.                    
      .col-lg-4.my-3 
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/16.png')     

    .row.justify-content-start.mb-3   
      .col-auto(data-aos="flip-down")
        .bg2.p-3
          h4.mb-0 Las variables de tipo cuantitativo

    p(data-aos="fade-down").mb-5 Son aquellas cuyas características pueden registrarse con números, es decir, el tiempo que demora la elaboración de un producto, la temperatura de una máquina, la cantidad de defectos detectados en una auditoría, entre otros.

    .row.justify-content-center.text-center.mb-4         
      .col-lg-5.my-3(data-aos="fade-left")
        .bg5.h-100
          img(data-aos="zoom-in")(src='@/assets/curso/temas/17.png')
          .p-4
            h4(data-aos="fade-down") Mediciones de tendencia central
            p(data-aos="fade-down").mb-0 Corresponde a lo que comúnmente se conoce como media, mediana y moda.     
     
      .col-lg-5.my-3(data-aos="fade-right")
        .bg6.h-100
          img(data-aos="zoom-in")(src='@/assets/curso/temas/18.png')
          .p-4
            h4(data-aos="fade-down") La media o promedio
            p(data-aos="fade-down").mb-0 Es la medida más común y se obtiene realizando la división de la sumatoria de todos los datos obtenidos, entre la cantidad de los mismos, un ejemplo de esto es:     
     
    p(data-aos="fade-down").mb-5 Si se tiene el registro de 9 datos de tiempo en una escala de minutos, que demora un proceso productivo, se puede obtener una tabla como la siguiente: 

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Registro de datos  

    .tabla-a.color-secundario.mb-5.text-center 
      table
        thead
          tr.c2
            th Proceso 
            th Tiempo 1 
            th Tiempo 2
            th Tiempo 3 
            th Tiempo 4 
            th Tiempo 5 
            th Tiempo 6 
            th Tiempo 7 
            th Tiempo 8 
            th Tiempo 9
        tbody
          tr
            td.text-bold Valor             
            td 2             
            td 2,3             
            td 2,1            
            td 2,5         
            td 2,2         
            td 1,8         
            td 1,7         
            td 2         
            td 2,1      

    p(data-aos="fade-down").mb-5 Se debe realizar la sumatoria de todos los datos que están en la tabla, dando como resultado 18,7 minutos y al dividirlos en 9 que corresponde a la cantidad de datos registrados, la media sería 2,07 minutos. 

    .row.justify-content-start.mb-3   
      .col-auto(data-aos="flip-down")
        .bg2.p-3
          h4.mb-0 Las variables de tipo cualitativo  

    .row.bg7.align-items-center.py-0.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center    
          .col-lg-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/22.svg')
          .col-lg-9.mt-5
            p(data-aos="fade-down").mb-0.j Son aquellas en donde no se registran números, por ejemplo, en una lista de chequeo de tipo cumple no cumple, el tipo de producto, las características de un producto como el color, su funcionalidad, su nombre, entre otros.    

    .row.justify-content-start.mb-3   
      .col-auto(data-aos="flip-down")
        .bg2.p-3
          h4.mb-0 Otra medida de tendencia central es la mediana 
    .row.justify-content-center.align-items-center.bg8.pb-0.mb-4
      .col-lg-11(data-aos="fade-down")
        p.mb-0 Este valor corresponde a aquel que está justo en medio de los datos y sirve para validar la distribución de los datos, especialmente cuando hay datos sesgados. Para calcularlo, se ubican los datos de menor a mayor, luego se selecciona el que dato que se encuentra en el medio, en el caso de que el conjunto de datos sea par, se deberá tomar los dos del centro y dividirlo entre dos, en este caso la mediana es igual a 2,1 minutos:    
      .col-lg-1.py-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/5.svg')   

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2.
      span Organización de datos con la tendencia central

    .tabla-a.color-secundario.mb-5.text-center 
      table
        thead
          tr.c2
            th Proceso 
            th Tiempo 1 
            th Tiempo 2
            th Tiempo 3 
            th Tiempo 4 
            th Tiempo 5 
            th Tiempo 6 
            th Tiempo 7 
            th Tiempo 8 
            th Tiempo 9
        tbody
          tr
            td.text-bold Valor             
            td 1,7            
            td 1,8           
            td 2          
            td 2        
            td.bgp 2,1         
            td 2,1        
            td 2,2         
            td 2,3         
            td 2,5    

    .row.justify-content-start.mb-3   
      .col-auto(data-aos="flip-down")
        .bg2.p-3
          h4.mb-0 La moda es la tendencia central que es igual al dato que más se repite

    p(data-aos="fade-down").mb-5 En el ejemplo anterior se encuentran dos datos que se repiten con la misma frecuencia, por lo cual la moda corresponde a 2 y a 2,1, es decir que en este conjunto de datos hay una moda bimodal, porque existen dos datos con la misma frecuencia máxima:  

    .titulo-sexto.color-acento-contenido
      h5 Tabla 3.
      span Organización de datos enfocados en la moda

    .tabla-a.color-secundario.mb-5.text-center 
      table
        thead
          tr.c2
            th Proceso 
            th Tiempo 1 
            th Tiempo 2
            th Tiempo 3 
            th Tiempo 4 
            th Tiempo 5 
            th Tiempo 6 
            th Tiempo 7 
            th Tiempo 8 
            th Tiempo 9
        tbody
          tr
            td.text-bold Valor             
            td 1,7            
            td 1,8           
            td.bgy 2          
            td.bgy 2        
            td.bgp 2,1         
            td.bgp 2,1        
            td 2,2         
            td 2,3         
            td 2,5  

    .row.justify-content-center.align-items-center.mb-4         
      .col-lg-5.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/23.png')   

      .col-lg-7.my-3 
        p(data-aos="fade-down") Estas medidas estadísticas muestran de forma resumida el comportamiento de un conjunto de valores, permitiendo determinar el punto medio y así servir de referencia en el momento de tomar decisiones. 

        p(data-aos="fade-down") En  los procesos de mejora de la productividad y calidad, es necesario que los datos se recolectan a través de muestras, ya que es poco probable obtener toda la información por su alto costo de consecución y el tiempo que se requiere, tener la información en una base de muestras es cómo determinar si una persona está enferma con una muestra de sangre, donde no es necesario obtener toda la sangre para determinar su estado, ya que para esto existen métodos estadísticos, sin embargo. 

    .row.justify-content-start.mb-3   
      .col-auto(data-aos="flip-down")
        .bg2.p-3
          h4.mb-0 Métodos de muestreo

    .row.bg9.align-items-center.py-0.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
          .col-lg-9.mt-5
            p(data-aos="fade-down").mb-0.j El muestreo es un conjunto de técnicas estadísticas que implican el análisis y la obtención de conclusiones acerca de un tema determinado a partir de un subgrupo o subconjunto pequeño de elementos, conocido como muestra, para inferirlas a todo el conjunto de elementos de interés, denominado población. El método de muestreo básico es el aleatorio, que permite seleccionar objetos o situaciones al azar para su evaluación.               
          .col-lg-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/25.svg')


    p(data-aos="fade-down").mb-4 Estudiemos los Tipos de muestreo aleatorio:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  

    p(data-aos="fade-down").mb-5 Toda la información se debe organizar para luego ser analizada a través de diferentes herramientas estadísticas, las cuales se muestran por etapas en los procesos de mejoramiento continuo, y son reflejados en la siguiente tabla:   
    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Herramientas de calidad por etapas de procesos de mejoramiento continuo

        .tabla-a
          table
            thead.bgt1
              tr.c2
                th Proceso 
                th Tiempo 1 
            tbody
              tr.bgt2
                td.text-center(rowspan='3') Identificación
                td Hoja de registro y verificación
              tr.bgt2
                td Estratificación
              tr.bgt2
                td Gráfica de pareto
              tr
                td.text-center(rowspan='3') Análisis
                td Diagrama causa efecto
              tr
                td Gráfica de dispersión
              tr
                td Histograma
              tr.bgt2
                td.text-center Control
                td Gráficas de control    

    .row.justify-content-center.align-items-center.mb-4         
      .col-lg-6.my-4
        .p-2
          .row.justify-content-center         
            .col-lg-2.p-0(data-aos="fade-left")
              .bg10.h-100.j
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/26.svg')

            .col-lg-10.p-0
              .bg11.h-100.p-3(data-aos="fade-down")
                h4 La etapa de identificación: 
                p.mb-0 Se encuentran hojas de registro, la estratificación de datos, y las gráficas de Pareto que fácilmente pueden priorizar las causas o problemáticas vitales de la compañía.                                   
      .col-lg-6.my-4
        .p-2
          .row.justify-content-center         
            .col-lg-2.p-0(data-aos="fade-left")
              .bg10.h-100.j
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/27.svg')

            .col-lg-10.p-0
              .bg11.h-100.p-3(data-aos="fade-down")
                h4 La etapa de análisis:
                p.mb-0 En esta etapa se puede contar con diferentes diagramas que ayudarán a realizar un análisis certero y que a su vez puedan predecir posibles resultados, estos son:

    .row.justify-content-start.mb-3   
      .col-auto(data-aos="flip-down")
        .bg2.p-3
          h4.mb-0 Los diagramas causa efecto

    p(data-aos="fade-down").mb-5 El diagrama es meramente cualitativo y surge de un estudio multidisciplinario en una lluvia de ideas del cual podría ser la causa raíz del problema basado en diferentes aspectos, materiales, mano de obra, método, medio ambiente, máquinas y medición, un ejemplo de esto es: 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10  
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Esquema ejemplo de un diagrama causa efecto

        img.img-t.img-a.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/28.svg',alt="La figura muestra un diagrama de espina de pescado, también conocido como diagrama de Ishikawa o de causa y efecto. El diagrama identifica posibles causas de problemas en categorías como Materiales, Mano de obra, Método, Medio ambiente, Máquinas y Medición. Cada categoría se conecta a una línea que apunta hacia los”Problemas”, indicando cómo estos factores pueden influir en los problemas resultantes.")    

    .row.justify-content-start.mb-3   
      .col-auto(data-aos="flip-down")
        .bg2.p-3
          h4.mb-0 El diagrama de dispersión 
    .row.justify-content-center.align-items-center.mb-4  
      .col-lg-7.my-3 
        p(data-aos="fade-down") Determina las causas de un problema basados en la relación entre dos variables numéricas, estos datos ubicados en un plano cartesiano deberán mostrar algún patrón que dé indicios de la oportunidad de mejora. Para esto se deberá recolectar los datos, en este caso se deberán seleccionar dos variables que puedan tener relación. 
        .bg12.p-3(data-aos="fade-down")
          h5 Ejemplo:
          p.mb-0 En un proceso productivo de fabricación de zapatos, el tiempo de secado de un pegante puesto sobre una suela es una variable a investigar, la otra que se relaciona puede ser la cantidad de pegante con el que se realiza el proceso. Así mismo, se deberá graficar los datos obtenidos y determinar si existe una correlación fuerte o débil entre los datos recolectados, un ejemplo:                     
      .col-lg-5.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/29.png')   

    .row.justify-content-center.mb-4          
      .col-lg-7.my-3
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Datos obtenidos para la construcción de diagrama de dispersión

        .tabla-a.text-center
          table
            thead.bgt1
              tr.c2
                th Tiempo de Secado (minutos) 
                th Cantidad de Pegante (mililitros)
            tbody
              tr
                td 10     
                td 12
              tr
                td 9     
                td 12
              tr
                td 15,3    
                td 12 
              tr
                td 12    
                td 12 
              tr
                td 7    
                td 14
              tr
                td 15,5     
                td 13
              tr
                td 16    
                td 11
              tr
                td 10    
                td 9
              tr
                td 12,6     
                td 11 
              tr
                td 15    
                td 11      
      .col-lg-5.my-3
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Diagrama de Dispersión       
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/30.svg', alt="La figura muestra un diagrama de dispersión titulado. Este gráfico representa la relación entre dos variables: la Cantidad de pegante (ml) en el eje horizontal (X) y el Tiempo de secado (min) en el eje vertical (Y). Los puntos dispersos en el gráfico representan diferentes observaciones o mediciones de cómo la cantidad de pegante afecta el tiempo que toma para secarse.")   


    .row.bg13.align-items-center.py-0
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center    
          .col-lg-4
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/32.png')
          .col-lg-8.mt-5
            p(data-aos="fade-down") Para interpretar si existe una fuerte o débil relación, se deberá calcular el coeficiente de correlación, dependiendo de su resultado se podrá concluir que el tiempo de secado depende de la cantidad de pegamento aplicado o no.  En este caso calculando en Excel arroja un resultado de r= 0,2, lo que indica que hay una débil relación entre estas dos variables. Generalmente esta variable está dada entre -1 y 1, teniendo en cuenta que sí los valores son cercanos a:
            ul.lista-ul.fa-ul
                li 
                  i.fas.fa-check-circle.c1
                  | -1 y 1 habrá una correlación muy fuerte
                li 
                  i.fas.fa-check-circle.c1
                  | -0,85 y 0,85 habrá una correlación fuerte
                li 
                  i.fas.fa-check-circle.c1
                  | -0,50 y 0,50 habrá una correlación moderada o débil
                li 
                  i.fas.fa-check-circle.c1
                  | -0,30 y 0,30 no habrá correlación  

    .row.justify-content-start.mb-3   
      .col-auto(data-aos="flip-down")
        .bg2.p-3
          h4.mb-0 Diagrama de Barra (Histograma)

    p(data-aos="fade-down") Indica la frecuencia que tendrán los datos dentro de una población. Esta se construye a partir de una tabla de frecuencias que posteriormente se podrá graficar.
    p(data-aos="fade-down").mb-5 Ejemplo:  

    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-7.my-3
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Datos obtenidos para la construcción de diagrama de dispersión

        .tabla-a
          table
            thead.bgt1
              tr.c2
                th.text-start(colspan='6') Mediciones 
            tbody.text-center
              tr
                td 2,202      
                td 2,51     
                td 2,2     
                td 2,262    
                td 2,492    
                td 2,366  

              tr
                td 2,626     
                td 2,424     
                td 2,272    
                td 2,323    
                td 2,441    
                td 2,751

              tr
                td 2,605     
                td 2,931    
                td 2,259    
                td 2,723    
                td 2,244    
                td 2,391                                   
      .col-lg-5.my-3
        p(data-aos="fade-down") En este caso se tienen 18 datos aleatorios que corresponde a la medición de la boca de una botella de vidrio en un proceso productivo, en el cual se detectó un problema, por lo que el equipo de calidad le ha dado solución, con el fin de validar si las acciones tuvieron éxito o no, se realizará un histograma sobre las medidas encontradas, ya que deberán estar entre 2 cm + o – 0,5 cm.
    .row.justify-content-center.mb-4 
      .col-lg-5.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/33.svg')
                 
      .col-lg-7.my-3
        p(data-aos="fade-down") Lo primero que se debe realizar es calcular el rango de datos, este corresponde a la diferencia entre el valor máximo y mínimo del conjunto de datos:       
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Análisis de los rangos de datos obtenidos

        .tabla-a
          table
            thead.bgt1
              tr.c2
                th.text-start(colspan='6') Mediciones 
            tbody.text-center
              tr
                td 2,202      
                td 2,51     
                td.bgb 2,2     
                td 2,262    
                td 2,492    
                td 2,366  

              tr
                td 2,626     
                td 2,424     
                td 2,272    
                td 2,323    
                td 2,441    
                td 2,751

              tr
                td 2,605     
                td.bgy 2,931    
                td 2,259    
                td 2,723    
                td 2,244    
                td 2,391   

        h4(data-aos="fade-down").mb-4.text-center Rango = 2,931 cm – 2,2 cm = 0,731 cm                                    
        p(data-aos="fade-down") Luego se debe determinar la cantidad de intervalos o clases, es decir las subdivisiones del conjunto de datos, en este caso será igual a la raíz cuadrada de la cantidad de datos que es 18, de la siguiente forma:
        .row.justify-content-center.mb-4     
          .col-auto         
            .bg14.p-1
              h4.mb-0(data-aos="fade-down").text-center Número de Clases  =  √18 = 4,24                                    
        p(data-aos="fade-down") Como el resultado obtenido es en decimales, se aproximará a 5 clases o intervalos. Luego de esto se calculará la longitud de la clase, este se calcula dividiendo el rango entre el número de clases, realizado anteriormente:
        .row.justify-content-center     
          .col-auto         
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/34.svg')


    .row.justify-content-center.mb-4                 
      .col-lg-7.my-3
        p(data-aos="fade-down") La longitud de la clase se tendrá de 0,15 cm y se procederá a construir los intervalos, para esto se tomará el número menor como límite inferior del primer intervalo y se le sumará el resultado de la longitud de la clase, de la siguiente forma:      
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Resultados de análisis de intervalos

        .tabla-a.text-center.mb-4
          table
            thead.bgt3
              tr.c2
                th Clase 
                th Límite Inferior 
                th Límite Superior 
            tbody
              tr
                td 1 
                td 2,2
                td 2,35

        p(data-aos="fade-down") Luego se construían los siguientes, tomando como límite inferior el límite superior anterior, de la siguiente forma:     
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9.
          span Construcción de tablas

        .tabla-a.text-center.mb-4
          table
            thead.bgt3
              tr.c2
                th Número de Clases 
                th Límite Inferior
                th Límite Superior
            tbody
              tr
                td 1 
                td 2,20
                td 2,35
              tr
                td 2 
                td 2,35 
                td 2,49
              tr
                td 3 
                td 2,49 
                td 2,64
              tr
                td 4 
                td 2,64 
                td 2,78
              tr
                td 5 
                td 2,78 
                td 2,93                                
                

        p(data-aos="fade-down") Posteriormente, se determinará la frecuencia con la que se encuentra los datos del intervalo, para esto se contará los elementos del conjunto de datos que corresponden en cada intervalo:   
        .titulo-sexto.color-acento-contenido
          h5 Tabla 10.
          span Análisis de frecuencia

        .tabla-a.text-center.mb-4
          table
            thead.bgt3
              tr.c2
                th Número de Clases 
                th Límite Inferior
                th Límite Superior
                th Frecuencia 
            tbody
              tr
                td 1 
                td 2,20 
                td 2,35
                td 7
              tr
                td 2 
                td 2,35
                td 2,50
                td 5
              tr
                td 3 
                td 2,50
                td 2,65
                td 3
              tr
                td 4 
                td 2,65
                td 2,80
                td 2
              tr
                td 5 
                td 2,80
                td 2,95
                td 1                         

      .col-lg-5.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/35.svg') 

    p(data-aos="fade-down").mb-5 Finalmente, se grafica el histograma, el cual es una representación gráfica de barras que muestra la frecuencia de cada intervalo. Generalmente, esto permitirá concluir dónde se concentra la mayor cantidad de datos.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8     
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Histograma

        img.img-t.img-a.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/36.svg',alt="La figura muestra un histograma que representa las Medidas boca de botella en cm. Hay cinco barras que corresponden a diferentes rangos de medida en centímetros, con la altura de cada barra indicando la frecuencia de las medidas dentro de ese rango. Las categorías del eje horizontal se leen de izquierda a derecha como 2,2 - 2,35, 2,35 - 2,5, 2,5 - 2,65, 2,65 - 2,8, y 2,8 - 2,95. La barra más alta indica el rango con la mayor frecuencia de medidas.")              

    p(data-aos="fade-down").mb-5 Como se puede identificar en la figura, los datos están concentrados en el intervalo de 2.2 cm a 2.35 cm, indicando una variación mínima en los otros intervalos.

    .row.justify-content-start.mb-3   
      .col-auto(data-aos="flip-down")
        .bg2.p-3
          h4.mb-0 Gráfica de control   

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/37.svg')     
      .col-lg-11.my-3(data-aos="fade-down")
        p.mb-0 Es otra herramienta estadística importante es aquella que tiene como objetivo visualizar el comportamiento de un proceso a lo largo del tiempo. Esto permite observar la variabilidad del proceso debido a causas comunes y causas especiales, con el fin de definir acciones de mejora y seguimiento. La gráfica correspondiente incluye elementos básicos como los límites superior, central e inferior, que pueden representar la variación esperada en los datos. Un ejemplo de esta herramienta es el seguimiento del peso de un producto alimenticio: se recolectan los datos, se grafican y se calculan sus límites. No obstante, lo más importante es que el proceso esté estandarizado para asegurar un análisis correcto.    

    .row.justify-content-center.mb-4                 
      .col-lg-7.my-3
        p(data-aos="fade-down") La longitud de la clase se tendrá de 0,15 cm y se procederá a construir los intervalos, para esto se tomará el número menor como límite inferior del primer intervalo y se le sumará el resultado de la longitud de la clase, de la siguiente forma:      
        .titulo-sexto.color-acento-contenido
          h5 Tabla 11.
          span Datos obtenidos del peso de un producto alimenticio

        .tabla-a.text-center.mb-4
          table
            thead.bgt3
              tr.c2
                th Clase 
                th Límite Inferior 
                th Límite Superior 
                th Límite Superior 
            tbody
              tr
                td 84,96 
                td 84,85 
                td 85,01        
                td 85,17
              tr
                td 84,98 
                td 84,85 
                td 85,01        
                td 85,17
              tr
                td 85,08 
                td 84,85 
                td 85,01        
                td 85,17 
              tr
                td 85,07 
                td 84,85 
                td 85,01        
                td 85,17
              tr
                td 84,98
                td 84,85 
                td 85,01        
                td 85,17
              tr
                td 84,99 
                td 84,85 
                td 85,01        
                td 85,17                             

      .col-lg-5.my-3
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span Carta de Contro  
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/38.svg', alt="La figura muestra una carta de control. El gráfico monitoriza el “Peso en gramos” y está marcado con líneas horizontales que representan el promedio de la muestra (X), la Línea de Control Inferior (LIC), la Línea de Control (Media), y la Línea de Control Superior (LCS). Estas líneas sirven para evaluar la estabilidad del proceso a lo largo de seis unidades de tiempo o muestras, que se muestran en el eje horizontal del gráfico.")                        


    p(data-aos="fade-down").mb-5 En este caso, la carta muestra que el peso se encuentra bajo control, sin embargo, si existiera una gran variabilidad donde existiera un punto fuera de los límites, esto será debido a condiciones especiales como deterioro de la máquina, acumulación de desperdicios en la máquina, desgaste de las herramientas, entre otros factores a analizar.  

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1  Evaluación y control de variables  

    .row.justify-content-center.align-items-center.bg15.pb-0.mb-5
      .col-lg-1.py-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/40.svg')     
      .col-lg-11(data-aos="fade-down")
        p La variación es parte del proceso productivo, básicamente son residuos o desperdicios, que están afectando la producción y no aporta valor, se deben controlar para que el proceso tenga la capacidad de ser estandarizado y medir las variables críticas.

        p.mb-0 La evaluación de procesos productivos es clave para detectar fallas y oportunidades de mejora. Por lo tanto, al evaluar un proceso, se debe determinar cuál será el objetivo de control  
    h4.text-center(data-aos="fade-down").mb-4 Conozcamos este proceso:
    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/41.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Control de variables
            p.mb-0 Estas pueden llevarse a cabo mediante procedimientos estadísticos de análisis de varianza, tras la recogida de las medidas de todas las variables del estudio, incluyendo las perturbadoras.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/42.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 El control de procesos
            p.mb-0 Se refiere al monitoreo y validación de las variables inherentes al proceso, con el propósito de reducir la variabilidad en las características del producto final, aumentar la eficiencia, disminuir el impacto ambiental y reducir los costos.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/43.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 SIPOC
            p.mb-0 Es un método para evaluar el proceso productivo que hace referencia a un diagrama que permite conocer el funcionamiento de un proceso, entendiendo que hay #[i Supplier] (Proveedores), #[i Input] (Entradas), #[i Process] (Procesos), #[i Output] (Salidas) y #[i Customer] (Clientes)
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/44.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 La evaluación
            p.mb-0 La evaluación de procesos implica un análisis a través del trabajo de campo para determinar si el programa realiza sus procesos operativos de manera eficaz y eficiente, y si contribuye a la mejora de la gestión. 

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2  Gráficas de variables y atributos
      
    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-5.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/47.png')     

      .col-lg-7.my-3
        p(data-aos="fade-down") Una variable es una característica medible a través de instrumentos técnicos como, por ejemplo, balanzas para medir masa, cronómetro para medir el tiempo, cinta métrica o pie de rey para medir longitud, termómetros para medir la temperatura, velocímetro para medir velocidad, entre otros. Los gráficos o cartas de control para esta variable funcionan como semáforos ya que permite visualizar el comportamiento del proceso y así poder advertir sobre alguna anomalía.

        p(data-aos="fade-down") Para el cálculo de los límites se utiliza la ecuación anterior. Sin embargo, la desviación estándar, mide la dispersión de una distribución de datos, entre más dispersa está una distribución de datos, más grande es su desviación estándar. Su cálculo es igual a:
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/48.svg')     

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.my-3
        p(data-aos="fade-down") Como primer paso se debe sacar la media o promedio de los datos, luego calcular el cuadrado de la distancia a la media para cada dato, sumar los valores que resultaron del paso 2, dividir entre el número de datos, finalmente sacar la raíz cuadrada.

        p(data-aos="fade-down") Un ejemplo de esto es cuando se disponen de datos sobre el peso en gramos de un producto alimenticio provenientes de un proceso de producción, presentados de la siguiente manera:           

      .col-lg-5.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/49.svg')  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 12.
          span Ejemplo de peso en gramos de un producto

        .tabla-a.color-secundario.mb-5.text-center 
          table
            thead
              tr.c2
                th peso 1 
                th peso 2 
                th peso 3
                th peso 4 
                th peso 5 
                th peso 6 
                th peso 7 
                th peso 8
                th peso 9
                th peso 10
            tbody
              tr
                td 84,96        
                td 84,96            
                td 84,97              
                td 84,96            
                td 84,96         
                td 85,02         
                td 84,96          
                td 84,96         
                td 84,96         
                td 84,99   

    .row.justify-content-center.mb-4                 
      .col-lg-5.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/50.svg')     

      .col-lg-7.my-3
        p(data-aos="fade-down") Se debe realizar el cálculo de desviación estándar: 
        .titulo-sexto.color-acento-contenido
          h5 Tabla 13.
          span Cálculo de desviación estándar

        .tabla-a.text-center.mb-4
          table
            thead.bgt3
              tr.c2
                th n 
                th Datos
                th x - promedio
                th (x  -  promedio) / 2
            tbody
              tr
                td 1                                        
                td 84,96                                        
                td -0,01                                       
                td 0,0001  
              tr
                td 2                                        
                td 85,02                                      
                td 0,05                                       
                td 0,0025 
              tr
                td 3                                        
                td 84,96                                       
                td -0,01                                       
                td 0,0001 
              tr
                td 4                                        
                td 84,96                                       
                td -0,01                                       
                td 0,0001  
              tr
                td 5                                        
                td 84,97                                       
                td 0                                       
                td 0,0000  
              tr
                td 6                                        
                td 84,96                                       
                td -0,01                                       
                td 0,0001
              tr
                td 7                                        
                td 84,96                                       
                td -0,01                                       
                td 0,0001  
              tr
                td 8                                        
                td 84,96                                       
                td -0,01                                       
                td 0,0001 
              tr
                td 9                                        
                td 84,96                                       
                td -0,01                                       
                td 0,0001
              tr
                td 10                                        
                td 84,99                                      
                td 0,02                                       
                td 0,0004  
              tr
                td.bgy1 Promedio                                        
                td.bgy1 84,97                                       
                td Total                                       
                td 0,0036 
              tr
                td                                        
                td                                        
                td Raíz                                        
                td 0,0004 
              tr
                td                                        
                td                                        
                td                                        
                td 0,019 

    p(data-aos="fade-down").mb-5 Así, se puede concluir que la desviación estándar de esta medición es de 0,019 gramos, entonces sus límites serán:

    .row.justify-content-center.mb-4         
      .col-lg-auto.my-4
        .p-2.h-100
          .row.justify-content-center         
            .col-lg-2.p-0(data-aos="fade-left")
              .bg10.h-100.px-2.j
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/51.svg')

            .col-lg-10.p-0
              .bgp.h-100.p-3.py-4(data-aos="fade-down")
                p.mb-0 #[b Límite superior] = 84,97 gr+(3*0,019 gr)=85,027                                  
      .col-lg-4.my-4
        .p-2.h-100
          .row.justify-content-center         
            .col-lg-2.p-0(data-aos="fade-left")
              .bg10.h-100.px-2.j
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/51.svg')

            .col-lg-10.p-0
              .bgp.h-100.p-3.py-4(data-aos="fade-down")
                p.mb-0 #[b Límite central] = 84,97 gr  
      .col-lg-5.my-4
        .p-2.h-100
          .row.justify-content-center         
            .col-lg-2.p-0(data-aos="fade-left")
              .bg10.h-100.px-2.j
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/51.svg')

            .col-lg-10.p-0
              .bgp.h-100.p-3.py-4(data-aos="fade-down")
                p.mb-0 #[b Límite inferior] = 84,97 gr-(3*0,019 gr)=84,913    

    .row.justify-content-center.mb-4          
      .col-lg-6.my-3
        .bg16.p-3.h-100.brad(data-aos="fade-down")
          p Para que el proceso esté bajo control tendría que cumplirse que todos los datos no estén fuera de los límites, el número de datos por encima y debajo del límite central sean los mismos, los datos están aleatoriamente arriba y debajo del límite central.                                       
          .titulo-sexto.color-acento-contenido
            h5 Figura 6.
            span Carta de Control proceso bajo control

          img.img-t.img-a.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/52.svg',alt="La figura muestra una carta de control. El gráfico presenta datos del peso en gramos a lo largo de seis intervalos de tiempo o categorías. Hay líneas horizontales que representan el promedio de la muestra (X), la Línea de Control Inferior (LIC), la Línea de Control (Media), y la Línea de Control Superior (LCS), que sirven para determinar si el proceso está dentro de los límites de control establecidos.")                    
      .col-lg-6.my-3
        .bg16.p-3.h-100.brad(data-aos="fade-down")
          p Por otro lado, las gráficas de control que advertían sobre un cambio en el proceso se verían de la siguiente forma:                                       
          .titulo-sexto.color-acento-contenido
            h5 Figura 7.
            span Carta de Control proceso fuera de control

          img.img-t.img-a.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/53.svg',alt="La imagen muestra una carta de control. En el gráfico se observan cuatro líneas horizontales que representan el promedio de la muestra (X), el límite superior, el límite central y el límite inferior. Estas líneas son referencias para evaluar si el proceso medido está dentro de los parámetros normales. El  proceso representado puede estar fuera de control, lo que implica que los datos podrían estar mostrando variaciones que exceden los límites de control establecidos.")  

    p(data-aos="fade-down").mb-5 Por otro lado, en las gráficas de control de atributos, se consideran los atributos que no son cuantificables, ya que pueden representar cualidades como el sabor o el olor de un producto. A continuación, se presenta un mapa mental que destaca los aspectos más relevantes de estas gráficas de control. 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          span Mapa Mental cartas de control por atributos

        img.img-t.img-a.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/54.svg',alt="La figura muestra un mapa mental centrado en “Cartas de control por atributos”. Esta herramienta de calidad se desglosa en varias ramas que explican su uso, control y tipos. Se menciona que se requieren tamaños de muestra mayores y se utilizan por su economía y simplicidad. Se aplican para productos o servicios y se controlan mediante cartas de control con dos clasificaciones: defectuoso y no defectuoso. Hay cuatro tipos de cartas de control basadas en atributos descritas: NP (número de defectuosos o disconformes), P (proporción de defectuosos o disconformes), U (defectos o disconformidades por unidad), y C (números de defectos), cada una con su propia interpretación en el control de calidad.") 
        figcaption Nota. 
          a(href="https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/188150" target="_blank") https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/188150 

    .row.bg17.align-items-center.py-0.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        p(data-aos="fade-down") Las cartas de control NP o número de defectuosos muestran la cantidad de unidades defectuosas, por ejemplo:
        .row.justify-content-center.align-items-center
          .col-lg-8.my-3
            .titulo-sexto.color-acento-contenido
              h5 Tabla 14.
              span Ejemplo de organización de elementos defectuosos

            .tabla-a.text-center.mb-4
              table
                thead.bgt3
                  tr.c2
                    th n 
                    th Datos
                    th x - promedio
                    th (x  -  promedio) / 2
                tbody
                  tr
                    td 1                                        
                    td 84,96                                        
                    td -0,01                                       
                    td 0,0001  
                  tr
                    td 2                                        
                    td 85,02                                      
                    td 0,05                                       
                    td 0,0025 
                  tr
                    td 3                                        
                    td 84,96                                       
                    td -0,01                                       
                    td 0,0001 
                  tr
                    td 4                                        
                    td 84,96                                       
                    td -0,01                                       
                    td 0,0001  
                  tr
                    td 5                                        
                    td 84,97                                       
                    td 0                                       
                    td 0,0000  
                  tr
                    td 6                                        
                    td 84,96                                       
                    td -0,01                                       
                    td 0,0001
                  tr
                    td 7                                        
                    td 84,96                                       
                    td -0,01                                       
                    td 0,0001  
                  tr
                    td 8                                        
                    td 84,96                                       
                    td -0,01                                       
                    td 0,0001 
                  tr
                    td 9                                        
                    td 84,96                                       
                    td -0,01                                       
                    td 0,0001
                  tr
                    td 10                                        
                    td 84,99                                      
                    td 0,02                                       
                    td 0,0004  

            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/57.svg')

          .col-lg-4.my-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/56.png')

    p(data-aos="fade-down") Las cartas de control P se utilizan para controlar el porcentaje de artículos defectuosos, en este caso se calcula dividiendo el número de artículos defectuosos sobre la cantidad de artículos muestreados.Las cartas de control P se utilizan para controlar el porcentaje de artículos defectuosos, en este caso se calcula dividiendo el número de artículos defectuosos sobre la cantidad de artículos muestreados.

    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3  Software de control estadístico 

    .row.justify-content-center.align-items-center.mb-4    
      .col-lg-6.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/58.png')
      .col-lg-6.my-3
        p(data-aos="fade-down") Se pueden emplear diversas herramientas estadísticas para analizar y tomar decisiones en los procesos productivos mediante software especializado; sin embargo, Excel es el más utilizado. Como complemento, se han desarrollado software especializados en herramientas estadísticas para el control de procesos de producción, tales como:
        ul.lista-ul.fa-ul
            li 
              i.fas.fa-check-circle.c1
              | DataLyzer Spectrum
            li 
              i.fas.fa-check-circle.c1
              | SPC for Excel
            li 
              i.fas.fa-check-circle.c1
              | NetSuite
            li 
              i.fas.fa-check-circle.c1
              | DELMIAworks
            li 
              i.fas.fa-check-circle.c1
              | Quickbase
            li 
              i.fas.fa-check-circle.c1
              | Katana Manufacturing ERP
            li 
              i.fas.fa-check-circle.c1
              | Prodsmart
            li 
              i.fas.fa-check-circle.c1
              | Statgraphics Centurion  

    p(data-aos="fade-down").mb-5 Los factores que se deben tener en cuenta, son: 
    img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/59.svg')

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
