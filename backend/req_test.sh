#!/bin/bash

# Create
create="curl -X POST -H 'Content-Type: application/json' -d '{'name': 'Alface Supremo', 'calories': 1000}' localhost:3000/food"

# Read
read="curl localhost:3000/foods"

# Update
update="curl -X PUT -H 'Content-Type: application/json' -d '{'name': 'Alface Supremo', 'calories': 1000}' localhost:3000/food/5e17a69ed8ed7601ed7fbd89"

# Delete
delete="curl -X DELETE localhost:3000/food/id_para_apagar"


op=0
while [  $op != "5" ]; do
    echo "
        # 1 - Create
        # 2 - Read
        # 3 - Update
        # 4 - Delete
        # 5 - Sair"

    read op

    case $op in 
        1)
            $create
        ;;    
        2)
            $read
        ;;
        3)
            $update
        ;;
        4)
            $delete
        ;;
    esac
done