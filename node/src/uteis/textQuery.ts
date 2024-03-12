export const getUsersWithWhere = (email: string, name: string, cellphone: string) => {
    let query = 'SELECT * FROM "user"';
    const conditions:Array<string> = [];
    const values:Array<string> = [];
    let count = 0


    testingAtribute(email, "email")
    testingAtribute(name, "name")
    testingAtribute(cellphone, "cellphone")

    function testingAtribute(atribute: string, text: string): void {
        if (atribute) {
            count += 1
            if (count === 1) {
                query+= " WHERE"
            }
            conditions.push(`${text} = $${count}`);
            values.push(atribute);
        }
    }

    query += ' ' + conditions.join(' AND ');

    return {
        text: query,
        values: values
    };
};

