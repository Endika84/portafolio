import { Proyecto } from "../models/proyecto";

export let proyectosList= [
    new Proyecto(
        "Euskalmet",
        "Web para la Agencia Meteorológica del Gobierno Vasco",
        "Me encargué de la maquetación completa del proyecto, asegurando que se cumplieran los ajustes necesarios de accesibilidad y optimización SEO. También realicé tareas de desarrollo utilizando jQuery y JavaScript para implementar funcionalidades interactivas.",
        "Dada la estructura particular del layout, opté por utilizar la propiedad CSS Grid en el contenedor principal. Esto permitió una mayor flexibilidad para posicionar los componentes y adaptar las plantillas de forma dinámica, mejorando la capacidad de personalización y mantenimiento del diseño.",
        ["Html5", "Css3", "Sass", "JavaScript", "JQuery", "Java", "Bootstrap", "Git", "GitHub", "Adobe XD"],
        ["imagen-01.jpg", "imagen-02.png", "imagen-03.png"],
        ["UX/UI", "Maquetación", "Desarrollo"],
        "https://www.euskalmet.euskadi.eus/inicio/",
        "portada-euskalmet.webp"
    ),
    new Proyecto(
        "Renta-Bizkaia",
        "Aplicación web para la elaboración de la declaración de la Renta de Bizkaia",
        "Participé en las fases iniciales del proyecto, creando wireframes y diseños basados en los requisitos del cliente. Llevé a cabo la maquetación completa de la aplicación utilizando React junto con el framework PrimeReact para los componentes. Implementé la metodología BEM para garantizar un código CSS organizado, escalable y fácil de mantener. Realicé integraciones dinámicas con PrimeIcons para mejorar la experiencia visual e interactiva de la interfaz. Contribuí a la optimización de la aplicación para garantizar un rendimiento óptimo y responsivo en todos los dispositivos.",
        "Debido al sistema de columnas para cada declarante, fue necesario un trabajo preciso con JavaScript para calcular dinámicamente las alturas de los contenidos y garantizar un diseño cohesivo. Además, implementé ajustes personalizados en PrimeReact para cumplir con los requerimientos específicos del cliente, lo que supuso un reto técnico que resultó altamente satisfactorio.",
        ["Html5", "Css3", "Sass", "JavaScript", "React", "PrimeReact", "PrimeIcons", "JQuery", "BEM", "Git", "Adobe XD"],
        ["imagen-01.png", "imagen-02.png", "imagen-03.png", "imagen-04.png"],
        ["UX/UI", "Maquetación", "Desarrollo"],
        "https://www.ebizkaia.eus/es/inicio",
        "portada-renta.webp"
    ),
    new Proyecto(
        "Amatech",
        "Web del grupo de consultoría informática Amatech",
        "Participé en la decisión tecnológica a utilizar y ejerci como maquetador utilizando el framework React-native para realizar el Front.",
        "A pesar de que react-native administra los estilos como si fuesen objetos de javascript, y al principio costo un poco hacerse con la manera en que los administraba, fue una buena práctica.",
        ["Html5-JSX", "Css objects","JavaScript", "React-native", "Git", "Bitbucket", "Figma"],
        ["imagen-01.png"],
        ["UX/UI", "Desarrollo"],
        "",
        // "https://amatech-group.com/",
        "portada-amatech.webp"
    ),
    new Proyecto(
        "Auril",
        "Aplicación web para el repositorio de muestras de Osakidetza",
        "Realicé la maquetación, la cual aún teniendo que ser realizada mediante C#.net y el lenguaje de plantillas Razor, pude desenvolverme perfectamente para ajustar toda la estructura planteada.",
        "La applicacion contaba con una pistola lectora de codigos de barras para clasificar las muestras. Fue todo un reto realizar los estilos para todas las casuisticas, y estudiar la generación de etiquetas para impresión mediante CSS Print.",
        ["Html5", "Css3", "Less", "C#-Razor", "JavaScript", "JQuery", "SVN"],
        ["imagen-01.png", "imagen-02.png", "imagen-03.png"],
        ["UX/UI"],
        "",
        "portada-auril.webp"
    ),
    new Proyecto(
        "BOA-Aragon",
        "Web del boletín oficial de Aragón",
        "Realicé la maquetación utilizando el framework Angular v13, combinado con los preprocesadores de estilos SASS y TailwindCSS, según los requerimientos del cliente. También implementé algunos componentes de Angular Material, lo que permitió optimizar significativamente el trabajo al aprovechar funcionalidades ya desarrolladas.",
        "El gobierno de Aragón implanta sus web con un framework propio llamado 'Desy' el cual aporta multiples funcionalidades basadas en Angular.",
        ["Html5", "Css3", "Sass", "TailwindCss", "Angular.v13", "Material Angular", "JavaScript", "Git"],
        ["imagen-01.png"],
        ["UX/UI", "Maquetación", "Desarrollo"],
        "http://www.boa.aragon.es/",
        "portada-boa.webp"
    ),
    new Proyecto(
        "OSHA-Campaigns",
        "Web para la agencia de la salud de la Comunidad Europea",
        "Participé tanto en la toma de requisitos como en el desarrollo frontend de la web, la cual se realizo en Drupal.",
        "Fue un proyecto largo desarrollado mediante el CMS Drupal, para el cual era uno de los principales maquetadores y gestores de contenido.",
        ["Html5", "Css3", "Less", "JavaScript", "JQuery", "Drupal", "Bootstrap 4", "Git"],
        ["imagen-01.png", "imagen-02.jpg", "imagen-03.jpg"],
        ["UX/UI", "Maquetación", "Desarrollo"],
        "https://healthy-workplaces.osha.europa.eu/es",
        "portada-campaigns.webp"
    ),
    new Proyecto(
        "Cuenca",
        "Prototipo de la web del Gobierno de Cuenca",
        "Realicé labores de usabilidad para poder plasmar en diseño la interfaz final de la web.",
        "En esta epoca estaba comenzando a hacerse popular Adobe XD, que fue lo que aprendi y utilice para llevarlo a cabo, apoyandome en Photoshop para el retoque de imagenes, e illustrator para la elaboración de la iconografia.",
        ["Adobe XD", "Photoshop", "Ilustrator"],
        ["imagen-01.jpg", "imagen-02.jpg", "imagen-03.jpg", "imagen-04.jpg"],
        ["UX/UI"],
        "",
        "portada-cuenca.webp"
    ),
    new Proyecto(
        "JJGG-de-Bizkaia",
        "Web de las Juntas Generales de Bizkaia",
        "Colaboré con otras dos personas en la maquetación y el desarrollo del sitio web utilizando jQuery, integrado en la plataforma Liferay.",
        "Este proyecto fue especialmente enriquecedor en términos de accesibilidad, ya que, al tratarse de una web gubernamental, era crucial cumplir con los estándares más altos en este ámbito.",
        ["Html5", "Css3", "JavaScript", "Liferay", "Bootstrap", "Accesibilidad", "Figma"],
        ["imagen-01.png"],
        ["UX/UI"],
        "https://jjggbizkaia.eus/es/inicio",
        "portada-jjgg.webp"
    ),
    new Proyecto(
        "Llanes",
        "Prototipo para la web del municipio de Llanes",
        "Realicé labores de usabilidad para poder plasmar en diseño la interfaz final de la web.",
        "En esta epoca estaba comenzando a hacerse popular Adobe XD, que fue lo que aprendi y utilice para llevarlo a cabo, apoyandome en Photoshop para el retoque de imagenes, e illustrator para la elaboración de la iconografia.",
        ["Adobe XD", "Photoshop", "Ilustrator"],
        ["imagen-01.jpg", "imagen-02.jpg", "imagen-03.jpg"],
        ["UX/UI"],
        "",
        "portada-llanes.webp"
    ),
    new Proyecto(
        "Magic",
        "Web de la agencia Europea para el medio ambiente",
        "Participé en la maquetación mediante un diseño ya dado por el cliente.",
        "La web fue creada mediante Drupal 7, fue un reto ya que nunca me habia tocado maquetar en esta tecnología, con la ayuda de los desarrolladores pude adaptarme perfectamente.",
        ["Html5", "Css3", "Less", "Drupal", "Bootstrap 4"],
        ["imagen-01.png"],
        ["Maquetación"],
        "https://magic-nexus.eu/project-details",
        "portada-magic.webp"
    ),
    new Proyecto(
        "Museo-Policia-Vasca",
        "Web del museo de la Policía Vasca",
        "Participé en tareas de usabilidad creando los wireframes necesarios y posteriormente realice la maquetación en un CMS propio de Ejie llamado Platea.",
        "Debido a que Platea se encuentra en constante evolución y cambios, primero realice una maquetación estatica con Sass, para que posteriormente resultara mucho mas sencilla su integración en el portal.",
        ["Html5", "Css3", "Sass", "JavaScript", "CMS Platea", "Git", "Bitbucket"],
        ["imagen-01.png", "imagen-02.png", "imagen-03.png"],
        ["UX/UI", "Maquetación", "Desarrollo"],
        "https://arkauteakademiamuseoa.euskadi.eus/inicio/",
        "portada-museo.webp"
    ),
    new Proyecto(
        "Oira",
        "Web de la Agencia Europea referente a los riesgos laborales",
        "Elaboré tanto los wireframes como los diseños con la guía de colores pautada por el cliente. Posteriormente realice mi labor de maquetador para dar vida a la web mediante el CMS Drupal.",
        "En esta epoca fue en donde decidi proponer que pasaramos de Less a Sass ya que veia que tendria mayor futuro puesto que boostrap lo tomo como estandar en su framework.",
        ["Html5", "Css3", "Sass", "JavaScript", "Drupal", "Bootstrap 4", "Git"],
        ["imagen-01.png"],
        ["UX/UI", "Maquetación", "Desarrollo"],
        "https://oiraproject.eu/es",
        "portada-oira.webp"
    ),
    new Proyecto(
        "Setis",
        "Web para la Agencia del Plan Energético de la Comunidad Europea",
        "Realice el estudio UX y prototipaje para elaborar tanto la landing page como una newsletter de la web principal.",
        "Realice el diseño y quedaron encantados, pero finalmente nunca llegamos a materializarlo en un desarrollo.",
        ["Adobe XD", "Illustrator"],
        ["imagen-01.jpg", "imagen-02.jpg"],
        ["UX/UI"],
        "https://setis.ec.europa.eu/index_en",
        "portada-setis.webp"
    ),
    new Proyecto(
        "Turismo-Euskadi",
        "Web de Turismo Euskadi perteneciente al Gobierno Vasco",
        "Participe en varias parte del site como maquetador, aunque tambien me toco realizar algunos retoques en el javascript para resolver ciertos bugs.",
        "Tuve que realizar una labor mediante css y javascript para poder dar vida al video por pasos de la página principal. Mis primeros pinitos con javascript profesionalmente.",
        ["Html5", "Css3", "JavaScript", "JQuery", "Git"],
        ["imagen-01.jpg", "imagen-02.jpg", "imagen-03.jpg"],
        ["UX/UI", "Maquetación", "Desarrollo"],
        "https://turismo.euskadi.eus/",
        "portada-turismo.webp"
    ),
    new Proyecto(
        "Vesafe",
        "Web de la Agencia Europea referente a los riesgos en los vehiculos.",
        "Mi primera web profesional en solitario. Lleve a cabo tanto la labor del diseño como la maquetación en Drupal.",
        "Genere la mayor parte de recursos gráficos, los cuales elabore a mano. La maquetación fue sencilla ya que tenia el control de toda la estructura, no como en otros proyectos, que los programadores te dan ya un esqueleto previo (lo cual desaconsejo!).",
        ["Html5", "Css3", "Sass", "JavaScript", "JQuery", "Drupal", "Bootstrap 4", "Git"],
        ["imagen-01.jpg", "imagen-02.jpg", "imagen-03.jpg"],
        ["UX/UI", "Maquetación", "Desarrollo"],
        "https://eguides.osha.europa.eu/vehicle-safety/",
        "portada-vesafe.webp"
    ),
    new Proyecto(
        "Bilbomatica",
        "Web de la consultoría informática Bilbomática",
        "Participe junto al diseñador en la elaboración de toda la interfaz asi como de todos los recursos gráficos. Posteriormente fui el encargado de realizar la maquetación y colaborar en adaptarla en Drupal.",
        "Al ser la web Empresarial de la empresa donde trabajaba, fue un placer ver como confiaban en mi dandome la capacidad de tomar las decisiones tecnológicas y diseños finales que terminariamos implantando.",
        ["Html5", "Css3", "Sass", "JavaScript", "JQuery", "Drupal", "Bootstrap 4", "Photoshop", "Git", "Bitbucket"],
        ["imagen-01.png", "imagen-02.png"],
        ["UX/UI", "Maquetación", "Desarrollo"],
        "https://www.bilbomatica.es/index.php/es/quienes-somos",
        "portada-bilbomatica.png"
    )
];