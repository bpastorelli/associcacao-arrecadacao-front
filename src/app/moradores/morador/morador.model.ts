class Morador{

    constructor(
        public nome: string,
        public cpf: string,
        public rg: string,
        public email: string,
        public telefone: string,
        public celular: string,
        public residenciaId: string
    ){}

}

class MoradoresRequest{

    constructor(

      public moradores: Morador[]

    ){}
}

export {Morador, MoradoresRequest}
