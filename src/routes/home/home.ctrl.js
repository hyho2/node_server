"use strict"

const home = (req, res) =>{
    res.render("home/index");
} //이크마 스크립트 문법

// function home (req, res) {
//     res.render("home/index");
// }

const login = (req, res)=>{
    res.render("home/login");
}

module.exports = {
    home,
    login,
};