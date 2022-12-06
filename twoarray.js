const arr = [
    [
        {
            name: 'Oleg',
            id: '1 array 1 obj'
        },
        {
            name: 'Vitalik',
            id: '1 array 2 obj'
        },
        {
            name: 'Vasia',
            id: '1 array 3 obj'
        },
        {
            name: 'Dima',
            id: '1 array 4 obj'
        }
    ],
    [
        {
            name: 'Oleg',
            id: '2 array 1 obj'
        },
        {
            name: 'Vitalik',
            id: '2 array 2 obj'
        },
        {
            name: 'Vasia',
            id: '2 array 3 obj'
        },
        {
            name: 'Dima',
            id: '2 array 4 obj'
        }
    ],
    [
        {
            name: 'Oleg',
            id: '3 array 1 obj'
        },
        {
            name: 'Vitalik',
            id: '3 array 2 obj'
        },
        {
            name: 'Vasia',
            id: '3 array 3 obj'
        },
        {
            name: 'Dima',
            id: '3 array 4 obj'
        }
    ]
]
console.log(arr)

arr.forEach((arrayNumber) => {
    console.log(arrayNumber)
    arrayNumber.forEach((arrayNumberUser) =>{
        arrayNumberUser.name !== 'Dima'? console.log(arrayNumberUser.name) : 1;

    })
})