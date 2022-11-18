import { Proyecto } from "../models/proyecto";

export let proyectosList= [
    new Proyecto(
        "Euskalmet",
        "Web para la Agencia Meteorológica del Gobierno Vasco",
        "Realicé la maquetación, así como los ajustes de accesibilidad y de SEO necesarios. También realice labores de desarrollo con JQuery y JasvaScript.",
        "Debido a la tipología del layout, decidí añadir distintas plantillas mediante la propiedad GRID de css al contenedor principal, de forma que nos permitiese jugar con total libertad con la posición de los componentes. ",
        ["Html", "Css", "Sass", "JavaScript", "JQuery", "Java", "Bootstrap", "Git"],
        ["imagen-01.jpg", "imagen-02.png", "imagen-03.png"],
        ["UX", "UI", "Maquetación", "Desarrollo"],
        "https://www.euskalmet.euskadi.eus/inicio/",
        "portada-euskalmet.webp"
    ),
    new Proyecto(
        "Renta-Bizkaia",
        "Aplicación web para la elaboración de la declaración de la Renta de Bizkaia",
        "Participé en las fases iniciales del proyecto ejecutando tanto los wireframes como los diseños. Aunque mi principal labor, sería la que posteriormente ejerci llevando a cabo la maquetación de la aplicación en React con el framework Primereact.",
        "Debido al sistema de columnas para cada declarante, se tubo que hilar muy fino mediante javascript para calcular las alturas de los contenidos. Fue un reto apasionante.",
        ["Html", "Css", "Sass", "JavaScript", "React", "PrimeReact", "PrimeIcons", "JQuery", "BEM", "Git"],
        ["imagen-01.png", "imagen-02.png", "imagen-03.png", "imagen-04.png"],
        ["UX", "UI", "Maquetación", "Desarrollo"],
        "https://www.ebizkaia.eus/es/inicio",
        "portada-renta.webp"
    ),
    new Proyecto(
        "Amatech",
        "Web del grupo de consultoría informática Amatech",
        "Participé tanto en la decisión tecnológica a utilizar. Tambien ejerci el rol de maquetador mediante React-native.",
        "A pesar de que react-native administra los estilos como si fuesen objetos de javascript, y al principio costo un poco hacerse con la manera en que los administraba, fue una buena práctica.",
        ["Html-JSX", "Css objects","JavaScript", "React-native", "Git"],
        ["imagen-01.png"],
        ["UX", "UI", "Desarrollo"],
        "https://amatech-group.com/",
        "portada-amatech.webp"
    ),
    new Proyecto(
        "Auril",
        "Aplicación web para el repositorio de muestras de Osakidetza",
        "Realicé la maquetación de la aplicación. Aún teniendo que ser realizada mediante C#.net y el lenguaje de plantillas Razor, me desenvolvi perfectamente para ajustar toda la estructura planteada.",
        "La applicacion contaba con una pistola lectora de codigos de barras para clasificar las muestras. Fue todo un reto realizar los estilos para todas las casuisticas, y estudiar la generación de etiquetas para impresión mediante CSS Print.",
        ["Html", "Css", "Less", "C#-Razor", "JavaScript", "JQuery", "SVN"],
        ["imagen-01.png", "imagen-02.png", "imagen-03.png"],
        ["UX", "UI"],
        "",
        "portada-auril.webp"
    ),
    new Proyecto(
        "BOA-Aragon",
        "Web del boletín oficial de Aragón",
        "Maquetación realizada en Angular con Sass y TailwindCss por petición del cliente.",
        "El gobierno de Aragón implanta sus web con un framework propio llamado 'Desy' el cual aporta multiples funcionalidades basadas en Angular.",
        ["Html", "Css", "Sass", "TailwindCss", "Angular.v13", "Material Angular", "JavaScript", "Git"],
        ["imagen-01.png"],
        ["UX", "UI", "Maquetación", "Desarrollo"],
        "http://www.boa.aragon.es/",
        "portada-boa.webp"
    ),
    new Proyecto(
        "OSHA-Campaigns",
        "Web para la agencia de la salud de la Comunidad Europea",
        "Participé tanto en la toma de requisitos como en el desarrollo frontend de la web, la cual se realizo en Drupal.",
        "Fue un proyecto largo desarrollado mediante el CMS Drupal, para el cual era uno de los principales maquetadores y gestores de contenido.",
        ["Html", "Css", "Less", "JavaScript", "JQuery", "Drupal", "Bootstrap"],
        ["imagen-01.png", "imagen-02.jpg", "imagen-03.jpg"],
        ["UX", "UI", "Maquetación", "Desarrollo"],
        "https://osha.europa.eu/es",
        "portada-campaigns.webp"
    ),
    new Proyecto(
        "Cuenca",
        "Prototipo de la web del Gobierno de Cuenca",
        "Realicé labores de usabilidad para poder plasmar en diseño la interfaz final de la web.",
        "En esta epoca estaba comenzando a hacerse popular Adobe XD, que fue lo que aprendi y utilice para llevarlo a cabo, apoyandome en Photoshop para el retoque de imagenes, e illustrator para la elaboración de la iconografia.",
        ["Adobe XD", "Photoshop", "Ilustrator"],
        ["imagen-01.jpg", "imagen-02.jpg", "imagen-03.jpg", "imagen-04.jpg"],
        ["UX", "UI"],
        "",
        "portada-cuenca.webp"
    ),
    new Proyecto(
        "JJGG-de-Bizkaia",
        "Web para las Juntas Generales de Bizkaia",
        "Participé junto con otras dos personas en la maquetación y desarrollo mediante JQuery del site realizado en Liferay.",
        "En esta web aprendi mucho en cuanto a accesibilidad se refiere, ya que al tratarse de una web gubernamental habia que prestarle expecial atención.",
        ["Html", "Css", "JavaScript", "Liferay", "Bootstrap"],
        ["imagen-01.png"],
        ["UX", "UI"],
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
        ["UX", "UI"],
        "http://www.google.es",
        "portada-llanes.webp"
    ),
    new Proyecto(
        "Magic",
        "Web de la agencia Europea para el medio ambiente",
        "Participé en la maquetación mediante un diseño ya dado por el cliente.",
        "La web fue creada mediante Drupal 7, fue un reto ya que nunca me habia tocado maquetar en esta tecnología, con la ayuda de los desarrolladores pude adaptarme perfectamente.",
        ["Html", "Css", "Less", "Drupal", "Bootstrap"],
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
        ["Html", "Css", "Sass", "JavaScript", "CMS Platea"],
        ["imagen-01.png", "imagen-02.png", "imagen-03.png"],
        ["UX", "UI", "Maquetación", "Desarrollo"],
        "https://www.museopoliciavasca.eus/es/",
        "portada-museo.webp"
    ),
    new Proyecto(
        "Oira",
        "Web de la Agencia Europea referente a los riesgos laborales",
        "Elaboré tanto los wireframes como los diseños con la guía de colores pautada por el cliente. Posteriormente realice mi labor de maquetador para dar vida a la web mediante el CMS Drupal.",
        "En esta epoca fue en donde decidi proponer que pasaramos de Less a Sass ya que veia que tendria mayor futuro puesto que boostrap lo tomo como estandar en su framework.",
        ["Html", "Css", "Sass", "JavaScript", "Drupal", "Bootstrap"],
        ["imagen-01.png"],
        ["UX", "UI", "Maquetación", "Desarrollo"],
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
        ["UX", "UI"],
        "https://setis.ec.europa.eu/index_en",
        "portada-setis.webp"
    ),
    new Proyecto(
        "Turismo-Euskadi",
        "Web de Turismo Euskadi perteneciente al Gobierno Vasco",
        "Participe en varias parte del site como maquetador, aunque tambien me toco realizar algunos retoques en el javascript para resolver ciertos bugs.",
        "Tuve que realizar una labor mediante css y javascript para poder dar vida al video por pasos de la página principal. Mis primeros pinitos con javascript profesionalmente.",
        ["Html", "Css", "JavaScript", "JQuery"],
        ["imagen-01.jpg", "imagen-02.jpg", "imagen-03.jpg"],
        ["UX", "UI", "Maquetación", "Desarrollo"],
        "https://turismo.euskadi.eus/",
        "portada-turismo.webp"
    ),
    new Proyecto(
        "Vesafe",
        "Web de la Agencia Europea referente a los riesgos en los vehiculos.",
        "Mi primera web profesional en solitario. Lleve a cabo tanto la labor del diseño como la maquetación en Drupal.",
        "Genere la mayor parte de recursos gráficos, los cuales elabore a mano. La maquetación fue sencilla ya que tenia el control de toda la estructura, no como en otros proyectos, que los programadores te dan ya un esqueleto previo (lo cual desaconsejo!).",
        ["Html", "Css", "Sass", "JavaScript", "JQuery", "Drupal", "Bootstrap"],
        ["imagen-01.jpg", "imagen-02.jpg", "imagen-03.jpg"],
        ["UX", "UI", "Maquetación", "Desarrollo"],
        "https://eguides.osha.europa.eu/vehicle-safety/",
        "portada-vesafe.webp"
    ),
    new Proyecto(
        "Bilbomatica",
        "Web de la consultoría informática Bilbomática",
        "Participe junto al diseñador senior en la elaboración de toda la interfaz como recursos gráficos. Posteriormente fui el encargado de llevar la maquetación a cabo.",
        "Fue un orguyo poder realizar la web de mi empresa y que terminara saliendo tan bien.",
        ["Html", "Css", "Sass", "JavaScript", "JQuery", "Drupal", "Bootstrap", "Photoshop"],
        ["imagen-01.png", "imagen-02.png"],
        ["UX", "UI", "Maquetación", "Desarrollo"],
        "https://www.bilbomatica.es/index.php/es/quienes-somos",
        "portada-bilbomatica.png"
    )
];