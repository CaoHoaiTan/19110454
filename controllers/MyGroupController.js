const { mygroup } = require('../models/models.mygroup');

// [GET] member by id 
function getMember(req, res) {
    const ID = Number(req.params.id);
    const member = mygroup.find(member => {
        if (member.id === ID)
            return true;
        return false;
    });
    if (member) {
        res.status(200).json(member);
    }
    else {
        res.status(400).json({ error: 'not valid' });
    }
}

function checkMember(newMember) {
    for (i = 0; i < mygroup.length; i++) {
        if (mygroup[i].id == newMember.id) {
            return false;
        }
    }
    if (newMember.id != 19110049 && newMember.id != 19110387)
        return false;
    return true;
}

// [POST] add member to mygroup
function addMember(req, res) {
    const newMember = req.body;
    if (checkMember(newMember) == true) {
        mygroup.push(newMember);
        req.pipe(res);
        res.status(200).send("A member successfully added");
    } else {
        res.status(400).send("Not valid");
    }

}

function solutionMessage(ID) {
    const member = mygroup.filter(member => member.id == ID);
    if (member.length > 0) {
        return `<html><body><ul><li>${member[0].name}</li></ul></body></html>`
    } else {
        return 'Not valid';
    }
}

function getHTML(req, res) {
    const result = solutionMessage(req.params.id);
    res.send(result);
}

function getAll(req, res) {
    var result = '';
    result += '<html><body><ul>';
    for (i = 0; i < mygroup.length; i++) {
        result += `<li>${mygroup[i].name}</li>`;
    }
    result += '</ul></body></html>';
    res.send(result);
}

module.exports = {
    getMember, addMember, getHTML, getAll
}