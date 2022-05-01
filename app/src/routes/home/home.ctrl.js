"use strict"



const output = {
    home: (req, res) =>{
        res.render("home/index");
    }, //이크마 스크립트 문법
    login: (req, res)=>{
        res.render("home/login");
    },
};


const users = {
    id: ["lhho", "이지민", "이소민"],
    psword: ["123", "1234", "12345"],
};

const process = {
    login: (req, res)=>{
        const id = req.body.id,
         psword = req.body.psword;
        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx]=== psword) {
                return res.json({
                    success: true,
                })
            }
        }

        return res.json({
            sucess: false,
            msg: "로그인에 시래하였습니다."
        })
    },
};

module.exports = {
    output,
    process,
};