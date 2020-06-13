const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const dataBaseFile = path.join(__dirname, '../config/database.json');
class Cube {
    constructor(name, description, imageUrl, difficulty) {
        this.id = uuidv4();
        this.name = name || "No name";
        this.description = description;
        this.imageUrl = imageUrl || "placeholder";
        this.difficulty = difficulty || 0;
    }

    save() {
        const newCubeData = {
            id: this.id,
            name: this.name,
            description: this.description,
            imageUrl: this.imageUrl,
            difficulty: this.difficulty
        }
        fs.readFile(dataBaseFile, (err, dbData) => {
            if (err) {
                console.log(err);
                return
            }

            const cubes = JSON.parse(dbData);

            cubes.push(newCubeData);
            fs.writeFile(dataBaseFile, JSON.stringify(cubes), (error) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log("new cube is successfuly stored");
                }
            })
        })
    }
}

module.exports = Cube;