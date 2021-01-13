const profileModel = require('../model/profileModel');

class ProfileController {
    home(req, res) {
        res.send('ini home dari page profile');
    }
    all(req, res) {
        const listProfile=profileModel.getAllProfile()
        res.render(__dirname + '/view/profile/all.ejs', { listProfile });

    }
    find(req, res) {
        const findProfile=profileModel.getFindProfile(req.params.number-1)
        res.send(findProfile);
    }
    artikel(req, res) {
        const id = (req.params.id) ? req.params.id : '';

        res.send('ini page artikel ' + id);
    }
    news(req, res) {
        res.send('ini page news dari page profile');
    }
}
module.exports = Object.freeze(new ProfileController());