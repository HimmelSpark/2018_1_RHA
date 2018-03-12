class User {
    constructor(object) {
        this.id = object.id;
        this.email = object.email;
        this.username = object.username;
        this.rating = object.rating;
    }

    getProfileData() {
        return {
            'email': this.email,
            'username': this.username,
            'rating': this.rating;
        }
    }
}
export default User;