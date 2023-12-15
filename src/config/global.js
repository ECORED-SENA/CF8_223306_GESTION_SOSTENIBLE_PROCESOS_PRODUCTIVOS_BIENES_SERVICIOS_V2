export default {
  global: {
    componenteFormativo: 'Análisis estadístico y propuesta de mejora',
    descripcionCurso:
      'La gestión y mejora de procesos requiere del uso, apropiación e interpretación de herramientas estadísticas que permitan identificar las causas de las problemáticas que aquejan la calidad y productividad del proceso. En este componente se encuentran las diferentes herramientas estadísticas, así como diferentes modelos y herramientas de mejoramiento. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Comportamiento estadístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Evaluación y control de variables',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Gráficas de variables y atributos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: '<i>Software</i> de control estadístico',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Alternativas de mejoramiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Modelos de gestión',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Herramientas de mejora',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Costos de no calidad',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/223306_CF08_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2.1 Modelos de Gestión',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). Definición del Lean Manufacturing. ',
      tipo: 'Video',
      link: 'https://youtu.be/pTgSyydCva8',
    },
    {
      tema: '2.1 Modelos de Gestión',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). Manufactura esbelta y mudas del proceso: introducción. ',
      tipo: 'Video',
      link: 'https://youtu.be/HTaVk0eKNO0',
    },
    {
      tema: '2.1 Modelos de Gestión',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). Sistemas push y pull. ',
      tipo: 'Video',
      link: 'https://youtu.be/Q92N-0QZpWE',
    },
    {
      tema: '2.1 Modelos de Gestión',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). Principios del sistema Lean. ',
      tipo: 'Video',
      link: 'https://youtu.be/zkapUh4jVVI',
    },
  ],
  glosario: [
    {
      termino: 'Carta de control',
      significado:
        'es un gráfico de muestra cronológicamente la variación de un proceso bajo control estadístico.',
    },
    {
      termino: 'Diagrama de dispersión',
      significado:
        'es un diagrama que valida la relación entre dos variables independientes, para validar si la variación de uno afecta al otro. ',
    },
    {
      termino: 'Diagrama Ishikawa',
      significado:
        'es un diagrama para analizar las causas del problema desde varios aspectos.',
    },
    {
      termino: 'Diagrama de Pareto',
      significado:
        'es una gráfica de barras que muestra las principales problemáticas en las cuales deben enfocarse los esfuerzos en la gestión de la producción.',
    },
    {
      termino: 'Herramientas Estadísticas',
      significado:
        'son técnicas de análisis de los procesos para mejorar la calidad y productividad de la empresa.',
    },
    {
      termino: 'Histograma',
      significado:
        'es una gráfica de barras que muestra la frecuencia o cantidad de datos por subgrupos',
    },
    {
      termino: 'Justo a Tiempo',
      significado:
        'es un pilar de <i>Lean Manufacturing</i> que pretende entregar a tiempo, con la calidad esperada y en la cantidad solicitada.',
    },
    {
      termino: 'Kanban',
      significado:
        'es un método de señales que surge para gestionar los procesos de fabricación y tener control visual de los pendientes en la planta, así como también de validar el inventario por estación de trabajo e identificar los cuellos de botella. ',
    },
    {
      termino: '<i>Lean Manufacturing</i>',
      significado:
        'es una filosofía japonesa que tienen como finalidad la eliminación de desperdicios a través de herramientas que permiten generar pequeñas mejoras.',
    },
    {
      termino: 'TPM',
      significado:
        'es un pilar de <i>Lean Manufacturing</i> que se enfoca en realizar acciones con la maquinaria que minimicen la cantidad de accidentes, la cantidad de defectos y la cantidad de averías.',
    },
  ],
  referencias: [
    {
      referencia:
        'Gutiérrez, H. (2010). Calidad Total y Productiva. McGraw-Hill.',
      link:
        'https://clea.edu.mx/biblioteca/files/original/56cf64337c2fcc05d6a9120694e36d82.pdf',
    },
    {
      referencia:
        'Mecalux. (2019). Método Kanban: ¿qué es y cómo funciona en logística?',
      link: 'https://www.mecalux.com.co/blog/metodo-kanban',
    },
    {
      referencia:
        'Uribe Gómez, J. A. (2021). Fundamentos de control estadístico de procesos para gestores y administradores tecnológicos. Instituto Tecnológico Metropolitano.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/188150',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eric Daniel Moreno Muñoz',
          cargo: 'Experto Temático',
          centro: 'Centro de diseño y metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Diego E. Acevedo Guevara',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesor Metodológico',
          centro: 'Centro de diseño y metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Centro de diseño y metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
