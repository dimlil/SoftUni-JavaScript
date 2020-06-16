const { v4: uuidv4 } = require('uuid');;
const { saveCube } = require('../controllers/database');


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
        saveCube(newCubeData);
    }
}

module.exports = Cube;