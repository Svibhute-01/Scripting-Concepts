const prompt = require("prompt-sync")();

class Contact {

    users: { name: string; contact: number }[] = [];

    add_user(name1: string, contact1: number): void {

        this.users.push({
            name: name1,
            contact: contact1
        });

        console.log("Contact Saved Successfully!");
    }

    search(name1: string) {

        let user= this.users.find(
            (user) => user.name == name1
        );
       if(!user){
        return "No results found"
       }
       return user.contact

    }

    delete(name1: string) {

        this.users = this.users.filter(
            (user) => user.name !== name1
        );

        console.log("Contact Deleted");
    }

    display() {

        console.log(this.users);

    }
}

const obj = new Contact();

while (true) {

    console.log(
        "\n1.Add Contact\n2.Search Contact\n3.Delete Contact\n4.Display All Contacts\n5.Exit"
    );

    const choice = Number(
        prompt("Enter Choice: ")
    );

    switch (choice) {

        case 1: {

            let name: string =
                prompt("Enter Name: ");

            let contact: number = Number(
                prompt("Enter Contact Number: ")
            );

            obj.add_user(name, contact);

            break;
        }

        case 2: {

            let searchName: string =
                prompt("Enter Name: ");

            console.log(
                obj.search(searchName)
            );

            break;
        }

        case 3: {

            let deleteName: string =
                prompt("Enter Name: ");

            obj.delete(deleteName);

            break;
        }

        case 4: {

            obj.display();

            break;
        }

        case 5: {

            console.log("Exiting...");
            process.exit();
        }

        default: {

            console.log("Invalid Choice");
        }
    }
}