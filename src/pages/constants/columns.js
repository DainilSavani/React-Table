const COLUMNS = [
    {
        id: 'id',
        header: 'ID',
        acessor: data => data.id,
        visible: true,
    },
    {
        id: 'firstName',
        header: 'First Name',
        acessor: data => data.firstName,
        visible: true,
    },
    {
        id: 'lastName',
        header: 'Last Name',
        acessor: data => data.lastName,
        visible: true,
    },
    {
        id: 'gender',
        header: 'Gender',
        acessor: data => data.gender,
        visible: true,
    },
    {
        id: 'age',
        header: 'Age',
        acessor: data => data.age,
        visible: true,
    },
    {
        id: 'email',
        header: 'Email',
        acessor: data => data.email,
        visible: true,
    },
]

export default COLUMNS;