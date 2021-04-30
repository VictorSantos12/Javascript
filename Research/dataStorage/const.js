//Assim como uma let, uma const possui a limitação de ter seu
//uso restrito ao trecho de código que a contém, porém, as
//semelhanças acabam aqui. Uma constante, por definição, possui um valor imutável em casos como os vistos acima. Veja:

//Alterando dados contidos em uma const

if(true){
    const user = {nome: 'João'};
    user.nome = "Victor"
    console.log(user)
}

if(true){
    const user = [
        data = {
            Name: 'Victor',
            Age: 19,
        },
        location = {
            Country: 'Brazil',
            State: 'Pernambuco',
            City: 'Recife'
        }
    ]
    console.log(user)
}