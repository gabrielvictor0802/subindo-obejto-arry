let pessoa = {
    nome: "gabriel",
    idade: 19,
    humano: true
}

pessoa.telefone = 34095908

delete pessoa.idade

console.log(pessoa)




let pessoas = [
    
    {
        nome:"gabriel",
        idade: 19,
        telefone: 34095908,
        amigos: ["Luan","Tati","Dennis","Edmundo"]
    },

    {
        nome:"gabriel",
        idade: 19,
        telefone: 34095908,
        amigos: ["Luan","Tati","Dennis","Edmundo"]
    },

    {
        nome:"gabriel",
        idade: 19,
        telefone: 34095908,
        amigos: ["Luan","Tati","Dennis","Edmundo"]
    },

    {
        nome:"gabriel",
        idade: 19,
        telefone: 34095908,
        amigos:["Luan","Tati","Dennis","Edmundo"]
    },

    {
        nome:"gabriel",
        idade: 19,
        telefone: 34095908,
        amigos: ["Luan","Tati","Dennis","Edmundo"]
    }
]

console.log(pessoas[0].amigos[0])
console.log(pessoas[1].amigos[1])
console.log(pessoas[2].amigos[2])
console.log(pessoas[3].amigos[3])
