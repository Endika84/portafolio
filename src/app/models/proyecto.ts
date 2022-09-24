export class Proyecto{

    constructor(
        public titulo: string,
        public descripcion: string,
        public funciones: string,
        public curiosidades: string,
        public tecnologias: Array<string>,
        public imagenes: Array<string>,
        public categorias: Array<string>,
        public url: string,
        public portada: string
    ){}
}