const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const models = require('../sequelize/models')
const nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
    service: "Gmail", 
    auth: {
        user: "victoralvarezsaucedo2@gmail.com",
        pass: "primos0530"
    }
});


const updateUser = async ( id ) => {
   
    const user = await models.User.findOne({ where: { id: id } })

    user.status = "Active";

    return  await user.save();
}

const sendEmail = (mailOptions) => {
    return new Promise((resolve, reject) => {
        smtpTransport.sendMail(mailOptions, function(error, response){
            if(error){
                console.log(error);
                reject(error)
            }else{
                console.log("Message sent: " + response.message);
                resolve({
                    status : true,
                    message: 'Enviado'
                })
            }
        });
    })
}

module.exports = {
    async register({ username, name, password, country, city, image },req){
        try {
            const _isExistUser = await models.User.findOne({ where: { email: username } })
            if(_isExistUser){
                throw 'Este usuario ya existe'
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const hashedToken = await bcrypt.hash(username, 12);

            const host=req.get('host');
            const link="http://"+host+"/verify?id="+hashedToken;
            var image2 = image.replace(" ", "&");

            const user = models.User.build({
                email: username,
                name,
                password: hashedPassword,
                country,
                city,
                image : image2,
                tokenVerify: hashedToken,
                status: 'pending'
            });

            await user.save();

            mailOptions={
                to : username,
                subject : "Please confirm your Email account",
                html : "Hola de nuevo!<br> Por favor, verifica tu email.<br><a href="+link+">Click aquí</a>"
            }
            console.log(mailOptions);
            
            return await sendEmail(mailOptions)

        }catch(err){
            throw err
        }
    },
    async login({ username, password }){
        try {
            const user = await models.User.findOne({ where: { email: username } })
            if (!user) {
                throw 'Usuario no encontrado'
            }

            const isEqual = await bcrypt.compare(password, user.password)
            if (!isEqual) {
                throw 'Contraseña no valida'
            }

            const token = jwt.sign({
                userId: user.id,
                username: user.email
            }, process.env.HASH, { expiresIn: '1d' });

            return {
                token,
                tokenExpiration: '1d'
            }
        }catch(err){
            throw err
        }
    },
    async verifyEmail({ tokenverify }){
        try {
            const user = await models.User.findOne({ where: { tokenVerify: tokenverify } })
            if (!user) {
                throw 'error'
            }
    
            const updateUserr = await updateUser(user.id)
            if (!updateUserr) {
                throw 'error'
            }
    
            return {
                status : true,
                message: 'Habilitado'
            }
        }catch(err){
            throw err
        }
    }
}