class ProfileModel{
    #dataProfile;
    constructor() {
        this.dataProfile=[
            {
                id: 1,
                name: "Kurniawan Agni",
                jk: "pria",
            },
            {
                id: 2,
                name: "Andrea Marco Sentana",
                jk: "pria",
            },
            {
                id: 3,
                name: "Eka Dyah Cahyani",
                jk: "wanita",
            },
            {
                id: 4,
                name: "Bayu Suryo",
                jk: "pria",
            }
        ];
    }
    getAllProfile() {
        return this.dataProfile;
    }
    getFindProfile(number) {
        return this.dataProfile[number];
    }
}

module.exports = Object.freeze(new ProfileModel());