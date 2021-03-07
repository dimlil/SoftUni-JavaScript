class Story {
    _comments;
    _likes;
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
        this.story = [{
            title: this.title,
            creator: this.creator,
            comments: this._comments,
            likes: this._likes
        }];
    }
    get likes() {
        if (this.story[0].likes.length == 0) {
            return `${this.title} has 0 likes`
        }
        if (this.story[0].likes.length == 1) {
            return `${this.story[0].likes[0]} likes this story!`
        }
        return `${this.story[0].likes[0]} and ${this.story[0].likes.length-1} others like this story!`
    }
    like(username) {
        if (this.story[0].likes.includes(username)) {
            throw new Error("You can't like the same story twice!")
        }
        if (this.creator === username) {
            throw new Error("You can't like your own story!")
        }
        this.story[0].likes.push(username)
        return `${username} liked ${this.title}!`
    }
    dislike(username) {
        if (this.story[0].likes.includes(username) == false) {
            throw new Error("You can't dislike this story!")
        }
        this.story[0].likes.splice(this.story[0].likes.indexOf(username), 1);
        return `${username} disliked ${this.title}`
    }
    comment(username, content, id) {
        if (id == undefined) {
            id = this.story[0].comments.length + 1;
            this.story[0].comments.push({
                id,
                username,
                content,
                replies: []
            })
            return `${username} commented on ${this.title}`
        }
        if (this.story[0].comments.some(c => c['id'] == id)) {
            let idToPush = id + '.' + (this.story[0].comments[0].replies.length + 1);
            this.story[0].comments.find(c => c['id'] == id).replies.push({
                idToPush,
                username,
                content,
            })
            return "You replied successfully"
        }
    }
    toString(sortingType) {
        let result = [];
        result.push(`Title: ${this.title}`)
        result.push(`Creator: ${this.creator}`)
        result.push(`Likes: ${this.story[0].likes.length}`)
        result.push(`Comments: `)
        let comments = [];
        if (sortingType == 'asc') {
            this.story[0].comments.forEach(e => {
                if (e.replies.length > 0) {
                    comments.push(`-- ${e.id}. ${e.username}: ${e.content}`)
                    let rep = e.replies.sort((a, b) => {
                        if (Number(a.idToPush) < Number(b.idToPush)) {
                            return -1;
                        }
                        if (Number(a.idToPush) > Number(b.idToPush)) {
                            return 1;
                        }
                        return 0;
                    })
                    rep.forEach(r => {
                        comments.push(`--- ${r.idToPush}. ${r.username}: ${r.content}`)
                    })
                } else {
                    comments.push(`-- ${e.id}. ${e.username}: ${e.content}`)
                }
            })
        }
        if (sortingType == 'desc') {
            this.story[0].comments.sort((a, b) => {
                if (a.id > b.id) {
                    return -1;
                }
                if (a.id < b.id) {
                    return 1;
                }
                return 0;
            })
            this.story[0].comments.forEach(e => {
                if (e.replies.length > 0) {
                    comments.push(`-- ${e.id}. ${e.username}: ${e.content}`)
                    let rep = e.replies.sort((a, b) => {
                        if (Number(a.idToPush) > Number(b.idToPush)) {
                            return -1;
                        }
                        if (Number(a.idToPush) < Number(b.idToPush)) {
                            return 1;
                        }
                        return 0;
                    })
                    rep.forEach(r => {
                        comments.push(`--- ${r.idToPush}. ${r.username}: ${r.content}`)
                    })
                } else {
                    comments.push(`-- ${e.id}. ${e.username}: ${e.content}`)
                }
            })
        }
        if (sortingType == 'username') {
            this.story[0].comments = this.story[0].comments.sort((a, b) => {
                if (a.username < b.username) {
                    return -1;
                }
                if (a.username > b.username) {
                    return 1;
                } else {
                    return 0
                }
            })
            this.story[0].comments.forEach(e => {
                if (e.replies.length > 0) {
                    comments.push(`-- ${e.id}. ${e.username}: ${e.content}`)
                    let rep = e.replies.sort((a, b) => {
                        if (Number(a.idToPush) > Number(b.idToPush)) {
                            return -1;
                        }
                        if (Number(a.idToPush) < Number(b.idToPush)) {
                            return 1;
                        }
                        return 0;
                    })
                    rep.forEach(r => {
                        comments.push(`--- ${r.idToPush}. ${r.username}: ${r.content}`)
                    })
                } else {
                    comments.push(`-- ${e.id}. ${e.username}: ${e.content}`)
                }
            })
        }
        result.push(comments.join('\n'));
        return result.join("\n")
    }
}
let art = new Story("My Story", "Anny");
art.like("John")
console.log("command likes", art.likes);
art.dislike("John");
console.log("command likes", art.likes);
console.log("command coments", art.comment("Sammy", "Some Content"));
console.log("command coments", art.comment("Sammy", "Some Content", 1));
console.log("command coments", art.comment("Sammy", "Some Content", 1));
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log("sort com", art.toString('username'));
// console.log(art.toString('desc'));
// console.log()
// art.like("Zane");
// console.log(art.toString('desc'));